const fileInput = document.querySelector('input'),
downloadBtn = document.querySelector('button');

downloadBtn.addEventListener('click',e => {
    e.preventDefault();
    fetchFile(fileInput.value);
    downloadBtn.innerText = "Downloading File...";
});

function fetchFile(url){
    fetch(url)
    .then(res => res.blob())
    .then(file => {
        let tempUrl = URL.createObjectURL(file);
        a = document.createElement('a');
        a.href = tempUrl;
        a.download = url.replace(/^.*[\\\/]/, '');
        a.click();
        downloadBtn.innerText = "Download File";
        URL.revokeObjectURL(tempUrl);
    }).catch(() => {
        alert("Failed to download file!");
        downloadBtn.innerText = "Download File";
    });
}