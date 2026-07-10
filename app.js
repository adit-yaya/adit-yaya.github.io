// waveform data stores
const wavePoints1 = [];
const wavePoints2 = [];
const defaultWavePoints1 = [...wavePoints1];
const waveLength = 400;

// animation offsets
let offset1 = 0;
let offset2 = 0;

let isPlaying1 = false;
let isPlaying2 = false;

// custom user uploads
const track1Audio = new Audio();
const track2Audio = new Audio();
track1Audio.loop = true;
track2Audio.loop = true;
track1Audio.volume = 0.05;
track2Audio.volume = 0.8;

// track select button
let uploadTargetTrack = 1;

function drawWaveform(canvas, points, currentOffset, active, shouldLoop = true) {
  const ctx = canvas.getContext('2d');
  const width = canvas.clientWidth;
  const height = canvas.clientHeight || 180;
  
  ctx.clearRect(0, 0, width, height);
  
  const barWidth = 3;
  const barGap = 2;
  const totalBarWidth = barWidth + barGap;
  const barCount = Math.ceil(width / totalBarWidth);
  const midY = height / 2;
  
  const playheadX = width * 0.5;
  
  for (let i = 0; i < barCount; i++) {
    const x = i * totalBarWidth;
    
    let pointIdx = Math.floor(i + currentOffset);
    let amplitude = 0.04;
    
    if (shouldLoop) {
      pointIdx = pointIdx % points.length;
      if (pointIdx < 0) pointIdx += points.length;
      amplitude = points[pointIdx] || 0.04;
    } else {
      if (pointIdx >= 0 && pointIdx < points.length) {
        amplitude = points[pointIdx];
      }
    }
    
    const barHeight = amplitude * height * 0.7;
    
    const style = getComputedStyle(document.body);
    const playedColor = style.getPropertyValue('--accent-gold').trim() || '#c5a059';
    const unplayedColor = style.getPropertyValue('--accent-gold-unplayed').trim() || '#e3d5b8';
    const pausedPlayedColor = style.getPropertyValue('--text-muted').trim() || '#777777';
    const pausedUnplayedColor = style.getPropertyValue('--border-light').trim() || '#e5e5e5';

    if (active) {
      if (x < playheadX) {
        ctx.fillStyle = playedColor;
        ctx.globalAlpha = 0.6;
      } else {
        ctx.fillStyle = unplayedColor;
        ctx.globalAlpha = 1.0;
      }
    } else {
      ctx.globalAlpha = 1.0;
      if (x < playheadX) {
        ctx.fillStyle = pausedPlayedColor;
      } else {
        ctx.fillStyle = pausedUnplayedColor;
      }
    }
    
    ctx.fillRect(x, midY - barHeight / 2, barWidth, barHeight);
    ctx.globalAlpha = 1.0;
  }
}

function animate() {
  requestAnimationFrame(animate);
  resizeCanvases();
  
  const canvas1 = document.getElementById('waveform-canvas-1');
  const canvas2 = document.getElementById('waveform-canvas-2');
  
  const hasAudio1 = track1Audio.src && !isNaN(track1Audio.duration) && track1Audio.duration > 0;
  const hasAudio2 = track2Audio.src && !isNaN(track2Audio.duration) && track2Audio.duration > 0;
  
  if (isPlaying1) {
    if (hasAudio1) {
      const totalBarWidth = 5;
      const playheadBarIndex = Math.floor(((canvas1 ? canvas1.clientWidth : 0) * 0.5) / totalBarWidth);
      const progress = track1Audio.currentTime / track1Audio.duration;
      const currentPointIndex = progress * waveLength;
      offset1 = currentPointIndex - playheadBarIndex;
    } else {
      offset1 = (offset1 + 0.3) % waveLength; 
    }
  } else {
    const totalBarWidth = 5;
    const playheadBarIndex = Math.floor(((canvas1 ? canvas1.clientWidth : 0) * 0.5) / totalBarWidth);
    offset1 = -playheadBarIndex;
  }
  
  if (isPlaying2) {
    if (hasAudio2) {
      const totalBarWidth = 5;
      const playheadBarIndex = Math.floor(((canvas2 ? canvas2.clientWidth : 0) * 0.5) / totalBarWidth);
      const progress = track2Audio.currentTime / track2Audio.duration;
      const currentPointIndex = progress * waveLength;
      offset2 = currentPointIndex - playheadBarIndex;
    } else {
      offset2 = (offset2 + 0.3) % waveLength; // slow
    }
  } else {
    const totalBarWidth = 5;
    const playheadBarIndex = Math.floor(((canvas2 ? canvas2.clientWidth : 0) * 0.5) / totalBarWidth);
    offset2 = -playheadBarIndex;
  }
  
  if (canvas1) {
    drawWaveform(canvas1, wavePoints1, offset1, isPlaying1, isPlaying1 && !hasAudio1);
  }
  if (canvas2) {
    drawWaveform(canvas2, wavePoints2, offset2, isPlaying2, isPlaying2 && !hasAudio2);
  }
}

// toggle track (drawer expansion)
function toggleTrack(trackNum, userTriggered = false) {
  const drawer = document.getElementById(`drawer-${trackNum}`);
  const card = document.getElementById(`card-${trackNum}`);
  const statusText = document.getElementById(`status-text-${trackNum}`);
  
  if (!drawer || !card) return;
  
  const isExpanded = drawer.classList.toggle('expanded');
  card.classList.toggle('active', isExpanded);
  card.setAttribute('aria-expanded', isExpanded);
  
  if (trackNum === 1) {
    isPlaying1 = isExpanded;
    statusText.textContent = isPlaying1 ? 'PAUSE' : 'PLAY';
    
    // handle playing audio on toggle
    if (track1Audio.src && !track1Audio.src.endsWith('/')) {
      if (isPlaying1 && userTriggered) {
        track1Audio.play().catch(err => console.log("Audio play restriction: ", err));
      } else if (!isPlaying1) {
        track1Audio.pause();
        track1Audio.currentTime = 0;
      }
    }
  } else if (trackNum === 2) {
    isPlaying2 = isExpanded;
    statusText.textContent = isPlaying2 ? 'PAUSE' : 'PLAY';
    
    if (track2Audio.src && !track2Audio.src.endsWith('/')) {
      if (isPlaying2 && userTriggered) {
        track2Audio.play().catch(err => console.log("Audio play restriction: ", err));
      } else if (!isPlaying2) {
        track2Audio.pause();
        track2Audio.currentTime = 0;
      }
    }
  }
}

// resize canvases
function resizeCanvases() {
  const canvases = document.querySelectorAll('.waveform-canvas');
  canvases.forEach(canvas => {
    const parent = canvas.parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      const targetWidth = Math.floor(rect.width);
      const targetHeight = Math.floor(rect.height || 180);
      
      if (canvas.dataset.logicalWidth !== String(targetWidth) || canvas.dataset.logicalHeight !== String(targetHeight)) {
        canvas.dataset.logicalWidth = String(targetWidth);
        canvas.dataset.logicalHeight = String(targetHeight);
        
        canvas.width = targetWidth * dpr;
        canvas.height = targetHeight * dpr;
        
        canvas.style.width = targetWidth + 'px';
        canvas.style.height = targetHeight + 'px';
        
        const ctx = canvas.getContext('2d');
        ctx.resetTransform();
        ctx.scale(dpr, dpr);
      }
    }
  });
}

// default currently nina
async function loadDefaultAudioFile(trackNum, fileUrl) {
  try {
    const response = await fetch(fileUrl);
    if (!response.ok) return; // return i fno file found
    const arrayBuffer = await response.arrayBuffer();
    
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioCtx.decodeAudioData(arrayBuffer, (decodedData) => {
      const audio = trackNum === 1 ? track1Audio : track2Audio;
      audio.src = fileUrl;
      audio.load();
      updateClearButtonState(trackNum);
      
      const points = trackNum === 1 ? wavePoints1 : wavePoints2;
      points.length = 0;
      
      const rawData = decodedData.getChannelData(0);
      const samplesPerBar = Math.floor(rawData.length / waveLength);
      
      const tempPeaks = [];
      let maxVal = 0;
      for (let i = 0; i < waveLength; i++) {
        const start = i * samplesPerBar;
        let sum = 0;
        for (let j = 0; j < samplesPerBar; j++) {
          sum += Math.abs(rawData[start + j]);
        }
        const val = sum / samplesPerBar;
        tempPeaks.push(val);
        if (val > maxVal) maxVal = val;
      }
      
      const normalizedPeaks = tempPeaks.map(p => {
        const norm = maxVal > 0 ? (p / maxVal) : 0;
        return parseFloat(Math.max(0.04, norm * 0.85).toFixed(4));
      });
      
      points.push(...normalizedPeaks);
      
      if (trackNum === 1) {
        defaultWavePoints1.length = 0;
        defaultWavePoints1.push(...wavePoints1);
      }
      
      const canvas = document.getElementById(trackNum === 1 ? 'waveform-canvas-1' : 'waveform-canvas-2');
      const totalBarWidth = 5;
      const playheadBarIndex = Math.floor(((canvas ? canvas.clientWidth : 0) * 0.5) / totalBarWidth);
      if (trackNum === 1) {
        offset1 = -playheadBarIndex;
      } else if (trackNum === 2) {
        offset2 = -playheadBarIndex;
      }
      
      audioCtx.close();
    });
  } catch (err) {
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // auto setup theme based on system preference
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const isDarkDefault = !prefersLight;
  
  if (isDarkDefault) {
    document.body.classList.add('dark-mode');
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) toggleBtn.textContent = '☾';
  } else {
    document.body.classList.remove('dark-mode');
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) toggleBtn.textContent = '☀';
  }

  // track 2 empty by default
  for (let i = 0; i < waveLength; i++) {
    wavePoints2.push(0.04);
  }
  
  resizeCanvases();
  window.addEventListener('resize', resizeCanvases);
  
  const canvas1 = document.getElementById('waveform-canvas-1');
  const canvas2 = document.getElementById('waveform-canvas-2');
  const totalBarWidth = 5;
  offset1 = -Math.floor(((canvas1 ? canvas1.clientWidth : 0) * 0.5) / totalBarWidth);
  offset2 = -Math.floor(((canvas2 ? canvas2.clientWidth : 0) * 0.5) / totalBarWidth);
  
  loadDefaultAudioFile(1, 'track1.mp3');
  animate();
  
  const tooltipContainer = document.querySelector('.tooltip-container');
  const tooltipTrigger = document.querySelector('.tooltip-trigger');
  if (tooltipTrigger && tooltipContainer) {
    tooltipTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      tooltipContainer.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
      if (!tooltipContainer.contains(e.target)) {
        tooltipContainer.classList.remove('active');
      }
    });
  }
  
  setTimeout(() => {
    const hash = window.location.hash;
    if (hash === '#notes') {
      toggleTrack(2, false);
    }
  }, 300);
});

window.toggleTrack = toggleTrack;

// target switch
function toggleUploadTarget(checkbox) {
  uploadTargetTrack = checkbox.checked ? 2 : 1;
  
  const label1 = document.getElementById('label-target-1');
  const label2 = document.getElementById('label-target-2');
  
  if (uploadTargetTrack === 1) {
    label1.style.color = 'var(--accent-gold)';
    label1.style.fontWeight = 'bold';
    label2.style.color = 'var(--text-main)';
    label2.style.fontWeight = 'normal';
  } else {
    label2.style.color = 'var(--accent-gold)';
    label2.style.fontWeight = 'bold';
    label1.style.color = 'var(--text-main)';
    label1.style.fontWeight = 'normal';
  }
}

function triggerFileInput() {
  document.getElementById('track-file-input').click();
}

function handleTrackUpload(input) {
  const file = input.files[0];
  if (!file) return;
  
  const uploadBtn = document.querySelector('.btn-upload-action');
  if (uploadBtn) uploadBtn.textContent = "DECODING...";
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const arrayBuffer = e.target.result;
    
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const decodeCtx = new AudioContextClass();
    
    decodeCtx.decodeAudioData(arrayBuffer, (audioBuffer) => {
      // sampling lol
      const channelData = audioBuffer.getChannelData(0);
      const sampleCount = channelData.length;
      const targetPoints = waveLength;
      const blockSize = Math.floor(sampleCount / targetPoints);
      
      const peaks = [];
      let maxVal = 0;
      
      for (let i = 0; i < targetPoints; i++) {
        const start = i * blockSize;
        let sum = 0;
        for (let j = 0; j < blockSize; j++) {
          sum += Math.abs(channelData[start + j]);
        }
        const val = sum / blockSize;
        peaks.push(val);
        if (val > maxVal) maxVal = val;
      }
      
      const normalizedPeaks = peaks.map(p => {
        const norm = maxVal > 0 ? (p / maxVal) : 0;
        return parseFloat(Math.max(0.04, norm * 0.85).toFixed(4));
      });
      
      // update waveform
      if (uploadTargetTrack === 1) {
        wavePoints1.length = 0;
        wavePoints1.push(...normalizedPeaks);
        
        // update audio file source
        const oldPlaying = isPlaying1;
        if (oldPlaying) track1Audio.pause();
        track1Audio.src = URL.createObjectURL(file);
        updateClearButtonState(1);
        if (oldPlaying) track1Audio.play().catch(err => console.log(err));
        
        // metadata
        const card = document.getElementById('card-1');
        const metaValues = card.querySelectorAll('.track-meta-value');
        if (metaValues.length > 0) {
          metaValues[0].textContent = "???";
          metaValues[1].textContent = "???";
          metaValues[2].textContent = file.name.substring(0, 10).toUpperCase();
        }
      } else {
        wavePoints2.length = 0;
        wavePoints2.push(...normalizedPeaks);
        
        const oldPlaying = isPlaying2;
        if (oldPlaying) track2Audio.pause();
        track2Audio.src = URL.createObjectURL(file);
        updateClearButtonState(2);
        if (oldPlaying) track2Audio.play().catch(err => console.log(err));
        
        const card = document.getElementById('card-2');
        const metaValues = card.querySelectorAll('.track-meta-value');
        if (metaValues.length > 0) {
          metaValues[0].textContent = "???";
          metaValues[1].textContent = "???";
          metaValues[2].textContent = file.name.substring(0, 10).toUpperCase();
        }
      }
      
      if (uploadBtn) uploadBtn.textContent = "SELECT";
      decodeCtx.close();
    }, (err) => {
      if (uploadBtn) {
        uploadBtn.textContent = "ERROR";
        setTimeout(() => { uploadBtn.textContent = "SELECT"; }, 2000);
      }
      console.error(err);
      decodeCtx.close();
    });
  };
  reader.readAsArrayBuffer(file);
}

function toggleDarkMode() {
  const body = document.body;
  const isDark = body.classList.toggle('dark-mode');
  const toggleBtn = document.getElementById('dark-mode-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = isDark ? '☾' : '☀';
  }
}

// clear button
function stopTrackAudio(trackNum, event) {
  if (event) event.stopPropagation(); 
  
  const statusText = document.getElementById(`status-text-${trackNum}`);
  if (statusText) statusText.textContent = 'PLAY';
  
  if (trackNum === 1) {
    isPlaying1 = false;
    
    // remove audio file
    track1Audio.pause();
    track1Audio.removeAttribute('src');
    track1Audio.load();
    
    // silennce waveform
    wavePoints1.length = 0;
    for (let i = 0; i < waveLength; i++) {
      wavePoints1.push(0.04);
    }
    
    // metadata
    const card = document.getElementById('card-1');
    const metaValues = card ? card.querySelectorAll('.track-meta-value') : [];
    if (metaValues.length > 0) {
      metaValues[0].textContent = "???";
      metaValues[1].textContent = "???";
      metaValues[2].textContent = "HUMAN";
    }
  } else if (trackNum === 2) {
    isPlaying2 = false;
    
    track2Audio.pause();
    track2Audio.removeAttribute('src');
    track2Audio.load();
    
    wavePoints2.length = 0;
    for (let i = 0; i < waveLength; i++) {
      wavePoints2.push(0.04);
    }
    
    const card = document.getElementById('card-2');
    const metaValues = card ? card.querySelectorAll('.track-meta-value') : [];
    if (metaValues.length > 0) {
      metaValues[0].textContent = "???";
      metaValues[1].textContent = "???";
      metaValues[2].textContent = "???";
    }
  }
  updateClearButtonState(trackNum);
}

// volume fader!
function setTrackVolume(trackNum, val) {
  const volume = parseFloat(val);
  if (trackNum === 1) {
    track1Audio.volume = volume;
  } else if (trackNum === 2) {
    track2Audio.volume = volume;
  }
  
  const label = document.getElementById(`volume-label-${trackNum}`);
  if (label) {
    const volNum = volume * 100;
    label.textContent = volNum.toFixed(2);
    if (volNum > 0) {
      label.style.color = 'var(--accent-gold)';
    } else {
      label.style.color = 'var(--text-muted)';
    }
  }
}

function updateClearButtonState(trackNum) {
  const audio = trackNum === 1 ? track1Audio : track2Audio;
  const hasAudio = audio.src && !audio.src.endsWith('/') && audio.src !== '';
  const btn = document.querySelector(`#track-row-${trackNum} .btn-clear-track`);
  if (btn) {
    btn.disabled = !hasAudio;
  }
}

window.toggleUploadTarget = toggleUploadTarget;
window.triggerFileInput = triggerFileInput;
window.handleTrackUpload = handleTrackUpload;
window.toggleDarkMode = toggleDarkMode;
window.stopTrackAudio = stopTrackAudio;
window.setTrackVolume = setTrackVolume;
