document.getElementById('cleanCopy').addEventListener('click', async () => {
  const statusEl = document.getElementById('status');
  
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let url = tab.url || '';

    // Remove &tl=... and ?tl=... parameters
    let cleaned = url
      .replace(/&tl=[^&]*/g, '')
      .replace(/\?tl=[^&]*/, '?')
      .replace(/\?&/, '?'); // clean up any "?&" left behind

    await navigator.clipboard.writeText(cleaned);

    statusEl.textContent = '✅ Copied!';
    statusEl.style.color = 'green';

    setTimeout(() => window.close(), 1200);
  } catch (e) {
    statusEl.textContent = '❌ Error';
    statusEl.style.color = 'red';
    console.error(e);
  }
});
