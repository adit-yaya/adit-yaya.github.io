
// waveform data stores
const wavePoints1 = [0.04,0.1035,0.1393,0.1594,0.1294,0.1034,0.1312,0.1204,0.1326,0.1298,0.1073,0.2909,0.5477,0.3283,0.4504,0.3348,0.3368,0.5454,0.5122,0.2617,0.4688,0.2967,0.2628,0.4433,0.4849,0.3154,0.4725,0.3523,0.2729,0.5676,0.4574,0.2576,0.4783,0.3274,0.2981,0.4998,0.3498,0.1972,0.2217,0.1753,0.197,0.6065,0.3571,0.1981,0.2478,0.3973,0.42,0.5854,0.6697,0.6441,0.5684,0.4491,0.5129,0.7135,0.641,0.6194,0.5862,0.4077,0.5227,0.6124,0.6608,0.6888,0.6008,0.4979,0.5894,0.7041,0.6388,0.6258,0.6849,0.4057,0.4879,0.6606,0.663,0.7053,0.5878,0.4743,0.5879,0.6623,0.6351,0.6204,0.5893,0.5125,0.5316,0.6442,0.7049,0.6889,0.5855,0.534,0.5857,0.7006,0.641,0.5797,0.6926,0.5711,0.6979,0.8,0.7251,0.6562,0.5803,0.3658,0.4849,0.6948,0.623,0.6274,0.6145,0.3802,0.4522,0.7186,0.6476,0.7013,0.5615,0.3764,0.5038,0.6509,0.5474,0.634,0.6376,0.383,0.2993,0.7353,0.6479,0.6602,0.5044,0.2742,0.4495,0.6658,0.5997,0.6845,0.4439,0.3509,0.4295,0.7316,0.6633,0.6832,0.3924,0.3366,0.4726,0.698,0.58,0.6437,0.512,0.2777,0.5933,0.6021,0.3027,0.438,0.3842,0.3396,0.549,0.5425,0.3193,0.4925,0.3134,0.2916,0.5023,0.5119,0.2826,0.497,0.3527,0.3219,0.5553,0.4951,0.3369,0.5009,0.3776,0.3206,0.5416,0.6321,0.6229,0.5989,0.3812,0.2808,0.6593,0.6307,0.5708,0.6034,0.3717,0.3127,0.614,0.6615,0.6437,0.5676,0.4285,0.681,0.6091,0.5898,0.5669,0.6639,0.4232,0.3573,0.4738,0.6234,0.6569,0.5657,0.2889,0.3999,0.6548,0.6334,0.6396,0.6355,0.3739,0.5495,0.7426,0.6507,0.6885,0.5812,0.5941,0.6793,0.6284,0.5546,0.5907,0.6853,0.2636,0.465,0.6409,0.5843,0.6213,0.4678,0.3016,0.4882,0.6275,0.5874,0.6059,0.553,0.3518,0.5101,0.7649,0.6501,0.6815,0.502,0.3618,0.5112,0.6176,0.5739,0.6197,0.5894,0.4401,0.4505,0.7133,0.6525,0.67,0.5141,0.4965,0.6028,0.7267,0.6049,0.6242,0.5052,0.4598,0.5071,0.7129,0.6676,0.6941,0.5238,0.5343,0.6208,0.7674,0.6321,0.6544,0.5643,0.4868,0.6057,0.7508,0.6569,0.6566,0.4866,0.4874,0.5943,0.7424,0.6299,0.6674,0.5011,0.498,0.5,0.7716,0.7136,0.6806,0.5385,0.5056,0.6532,0.7318,0.6213,0.6509,0.4943,0.4824,0.4543,0.7486,0.6332,0.6626,0.3342,0.3148,0.6279,0.7208,0.6317,0.6804,0.3675,0.3637,0.6278,0.6957,0.6724,0.6391,0.3447,0.6954,0.6679,0.6149,0.5869,0.6861,0.2931,0.3826,0.6413,0.6259,0.6507,0.5735,0.3707,0.3076,0.6692,0.6293,0.6033,0.5761,0.3656,0.3728,0.6069,0.6633,0.6499,0.5516,0.4675,0.6953,0.605,0.5693,0.5876,0.6765,0.4252,0.3645,0.5719,0.6012,0.6258,0.5304,0.259,0.4124,0.6484,0.6258,0.6674,0.5821,0.3632,0.4972,0.6525,0.67,0.6848,0.5339,0.4692,0.7431,0.6373,0.5993,0.5624,0.6747,0.267,0.475,0.6273,0.6596,0.6225,0.5446,0.3438,0.4387,0.6702,0.5953,0.5885,0.581,0.318,0.4471,0.682,0.653,0.6733,0.5483,0.4899,0.6862,0.6212,0.5459,0.606,0.5831,0.4027,0.264,0.147,0.0625,0.0512,0.0556,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04,0.04];
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
track1Audio.volume = 0;
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
  
  const playheadX = width * 0.2;
  
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
    
    // waveform amplitude scaled against track box height
    const barHeight = amplitude * height * 0.8;
    
    // left of playhead highlighted, right of playhead still greyed
    const style = getComputedStyle(document.body);
    const playedColor = style.getPropertyValue('--accent-gold').trim() || '#c5a059';
    const unplayedColor = style.getPropertyValue('--accent-gold-unplayed').trim() || '#e3d5b8';
    const pausedPlayedColor = style.getPropertyValue('--text-muted').trim() || '#777777';
    const pausedUnplayedColor = style.getPropertyValue('--border-light').trim() || '#e5e5e5';

    if (active) {
      if (x < playheadX) {
        ctx.fillStyle = playedColor;
      } else {
        ctx.fillStyle = unplayedColor;
      }
    } else {
      if (x < playheadX) {
        ctx.fillStyle = pausedPlayedColor;
      } else {
        ctx.fillStyle = pausedUnplayedColor;
      }
    }
    
    // midbar
    ctx.fillRect(x, midY - barHeight / 2, barWidth, barHeight);
  }
}

function animate() {
  requestAnimationFrame(animate);
  
  // size canvases for transitions
  resizeCanvases();
  
  const canvas1 = document.getElementById('waveform-canvas-1');
  const canvas2 = document.getElementById('waveform-canvas-2');
  
  const hasAudio1 = track1Audio.src && !isNaN(track1Audio.duration) && track1Audio.duration > 0;
  const hasAudio2 = track2Audio.src && !isNaN(track2Audio.duration) && track2Audio.duration > 0;
  
  if (isPlaying1) {
    if (hasAudio1) {
      const totalBarWidth = 5;
      const playheadBarIndex = Math.floor(((canvas1 ? canvas1.clientWidth : 0) * 0.2) / totalBarWidth);
      const progress = track1Audio.currentTime / track1Audio.duration;
      const currentPointIndex = progress * waveLength;
      offset1 = currentPointIndex - playheadBarIndex;
    } else {
      offset1 = (offset1 + 0.3) % waveLength; 
    }
  } else {
    // line up with start of song
    if (hasAudio1) {
      const totalBarWidth = 5;
      const playheadBarIndex = Math.floor(((canvas1 ? canvas1.clientWidth : 0) * 0.2) / totalBarWidth);
      offset1 = -playheadBarIndex;
    }
  }
  
  if (isPlaying2) {
    if (hasAudio2) {
      const totalBarWidth = 5;
      const playheadBarIndex = Math.floor(((canvas2 ? canvas2.clientWidth : 0) * 0.2) / totalBarWidth);
      const progress = track2Audio.currentTime / track2Audio.duration;
      const currentPointIndex = progress * waveLength;
      offset2 = currentPointIndex - playheadBarIndex;
    } else {
      offset2 = (offset2 + 0.3) % waveLength; 
    }
  } else {
    if (hasAudio2) {
      const totalBarWidth = 5;
      const playheadBarIndex = Math.floor(((canvas2 ? canvas2.clientWidth : 0) * 0.2) / totalBarWidth);
      offset2 = -playheadBarIndex;
    }
  }
  
  if (canvas1) {
    drawWaveform(canvas1, wavePoints1, offset1, isPlaying1, !hasAudio1);
  }
  if (canvas2) {
    drawWaveform(canvas2, wavePoints2, offset2, isPlaying2, !hasAudio2);
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

// default currently burial
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
      
      const points = trackNum === 1 ? wavePoints1 : wavePoints2;
      points.length = 0;
      
      const rawData = decodedData.getChannelData(0);
      const samplesPerBar = Math.floor(rawData.length / waveLength);
      for (let i = 0; i < waveLength; i++) {
        let max = 0;
        const start = i * samplesPerBar;
        for (let j = 0; j < samplesPerBar; j++) {
          const val = Math.abs(rawData[start + j]);
          if (val > max) max = val;
        }
        points.push(Math.max(0.04, max));
      }
      
      // go to default array ( i thinkn ipod touch i forgot tho)
      if (trackNum === 1) {
        defaultWavePoints1.length = 0;
        defaultWavePoints1.push(...wavePoints1);
      }
      
      audioCtx.close();
    });
  } catch (err) {
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // no wavform on track2 by default
  for (let i = 0; i < waveLength; i++) {
    wavePoints2.push(0.04);
  }
  
  resizeCanvases();
  window.addEventListener('resize', resizeCanvases);
  
  loadDefaultAudioFile(1, 'track1.mp3');
  animate();
  
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
        if (oldPlaying) track1Audio.play().catch(err => console.log(err));
        
        // metadata
        const card = document.getElementById('card-1');
        const metaValues = card.querySelectorAll('.track-meta-value');
        if (metaValues.length > 0) {
          metaValues[0].textContent = "CUSTOM";
          metaValues[2].textContent = file.name.substring(0, 10).toUpperCase();
        }
      } else {
        wavePoints2.length = 0;
        wavePoints2.push(...normalizedPeaks);
        
        const oldPlaying = isPlaying2;
        if (oldPlaying) track2Audio.pause();
        track2Audio.src = URL.createObjectURL(file);
        if (oldPlaying) track2Audio.play().catch(err => console.log(err));
        
        const card = document.getElementById('card-2');
        const metaValues = card.querySelectorAll('.track-meta-value');
        if (metaValues.length > 0) {
          metaValues[0].textContent = "CUSTOM";
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
      metaValues[0].textContent = "A♭m";
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
      metaValues[0].textContent = "Bm";
      metaValues[2].textContent = "???";
    }
  }
}

// volume fader!
function setTrackVolume(trackNum, val) {
  const volume = parseFloat(val);
  if (trackNum === 1) {
    track1Audio.volume = volume;
  } else if (trackNum === 2) {
    track2Audio.volume = volume;
  }
}


window.toggleUploadTarget = toggleUploadTarget;
window.triggerFileInput = triggerFileInput;
window.handleTrackUpload = handleTrackUpload;
window.toggleDarkMode = toggleDarkMode;
window.stopTrackAudio = stopTrackAudio;
window.setTrackVolume = setTrackVolume;
