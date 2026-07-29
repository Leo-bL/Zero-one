// يحمّل ملف فعلياً على جهاز المستخدم بدل ما يفتحه بتاب جديد.
// بيجرب أول طريقة blob (الأدق)، ولو فشلت (مثلاً السيرفر ما بيسمح بـ CORS)
// بيرجع لطريقة احتياطية بسيطة.
export const downloadFile = async (url, filename = '') => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('فشل تحميل الملف');

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename || url.split('/').pop() || 'file';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(blobUrl);
  } catch (err) {
    // Fallback بسيط لو الـ fetch انحظر
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || '';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
