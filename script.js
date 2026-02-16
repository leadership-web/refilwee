document.addEventListener('DOMContentLoaded', () => {
    // Selectors
    const p1 = document.getElementById('page-1');
    const p2 = document.getElementById('page-2');
    const p3 = document.getElementById('page-3');
    const p4 = document.getElementById('page-4');
    
    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');

    // --- PHASE 1: STARTUP ---
    setTimeout(() => document.getElementById('p1-title').classList.add('reveal'), 500);
    setTimeout(() => document.getElementById('p1-date').classList.add('reveal'), 900);
    setTimeout(() => document.getElementById('p1-msg').classList.add('reveal'), 1400);

    const p1Lines = document.querySelectorAll('.slide-item');
    p1Lines.forEach((line, i) => {
        setTimeout(() => line.classList.add('reveal'), 2200 + (i * 1000));
    });

    setTimeout(() => btn1.classList.add('reveal'), 5500);

    // --- PHASE 2: TO TRIBUTE ---
    btn1.addEventListener('click', () => {
        p1.style.opacity = '0';
        setTimeout(() => {
            p1.classList.add('hidden');
            p2.classList.remove('hidden');
            // Animate Card Text
            const cardLines = document.querySelectorAll('.card-reveal');
            cardLines.forEach((line, i) => {
                setTimeout(() => line.classList.add('reveal'), 400 + (i * 800));
            });
        }, 800);
    });

    // --- PHASE 3 & 4: THE PLOT TWIST ---
    btn2.addEventListener('click', () => {
        // Sudden Cut
        p2.style.opacity = '0';
        setTimeout(() => {
            p2.classList.add('hidden');
            p3.classList.remove('hidden');
            
            // Wait 2.5 seconds on Error Screen, then move to Terminal
            setTimeout(() => {
                p3.style.opacity = '0';
                setTimeout(() => {
                    p3.classList.add('hidden');
                    p4.classList.remove('hidden');
                }, 500);
            }, 2500);
        }, 400);
    });

    

    // --- Add small falling images (hearts/flowers) to mimic the emoji rain ---
    (function initFallingImages(){
        const container = document.querySelector('.flower-bg');
        if (!container) return;

        // Simple inline SVGs (encoded) for heart and flower
        const heartSVG = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23ff5577" d="M12 21s-7-4.35-9-7.5C-0.5 9.5 3 4 7 4c2.3 0 3.5 1.5 5 3 1.5-1.5 2.7-3 5-3 4 0 7.5 5.5 4 9.5-2 3.2-9 7-9 7z"/></svg>');
        const flowerSVG = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="%23ffd166"><circle cx="12" cy="12" r="2"/><path fill="%23ff6b6b" d="M12 2c1.1 3 3 4 6 4s4.9-1 6-4c-3 1.1-4 3-4 6s1.9 4.9 4 6c-3-1.1-4-3-6-4s-4 1.9-6 4c1.1-3 3-4 4-6s-1.9-4.9-4-6c3 1.1 4 3 4 6s-1.9 4.9-4 6c3-1.1 4-3 6-4s4 1.9 6 4c-1.1-3-3-4-4-6s1.9-4.9 4-6c-3 1.1-4 3-6 4s-4-1.9-6-4z"/></g></svg>');

        const imgs = [
            'data:image/svg+xml;utf8,' + heartSVG,
            'data:image/svg+xml;utf8,' + flowerSVG
        ];

        function spawnImage(){
            const img = document.createElement('img');
            img.className = 'falling-img';
            img.src = imgs[Math.floor(Math.random() * imgs.length)];

            const size = 12 + Math.floor(Math.random() * 22); // 12px - 34px
            img.style.width = size + 'px';
            img.style.height = size + 'px';

            img.style.left = Math.floor(Math.random() * 100) + '%';
            img.style.top = '-6%';

            const duration = 6 + Math.random() * 6; // 6s - 12s
            img.style.animationDuration = duration + 's';

            container.appendChild(img);

            // Remove after animation completes
            setTimeout(() => {
                if (img && img.parentNode) img.parentNode.removeChild(img);
            }, (duration * 1000) + 200);
        }

        // Spawn periodically; a lighter cadence to avoid overload
        const interval = setInterval(spawnImage, 350);

        // optional: spawn a few immediately
        for (let i=0;i<6;i++){ setTimeout(spawnImage, i * 150); }
    })();
});