// 处理图片上传和预览
document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.innerHTML = `<img src="${event.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);
    }
});