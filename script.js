document.getElementById('submitButton').addEventListener('click', function() {
    const codeInput = document.getElementById('codeInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const inputSection = document.getElementById('inputSection');
    const giftSection = document.getElementById('giftSection');
    const envelope = document.getElementById('envelope');

    if (codeInput === "1102003") {

        $("#hideh1").hide();
        $("#hideh2").hide();
        // إذا كان الرمز صحيحًا
        inputSection.classList.add('hidden');
        giftSection.classList.remove('hidden');

        // إظهار الظرف تلقائيًا
        envelope.style.opacity = '1';
        setTimeout(() => {
            envelope.classList.add('open');
        }, 1000); // تأخير 1 ثانية قبل فتح الظرف

        // إضافة قلوب وورود تسقط باستمرار
        setInterval(() => {
            createFallingElement('❤️');
            createFallingElement('🌹');
        }, 500);
    } else {
        // إذا كان الرمز غير صحيح
        errorMessage.classList.remove('hidden');
    }
});

function createFallingElement(emoji) {
    const element = document.createElement('div');
    element.classList.add('heart');
    element.textContent = emoji;
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 20000);
}