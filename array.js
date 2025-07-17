 let array = [];
        let sorting = false;
        const arrayContainer = document.getElementById('starting-array');
        const generateBtn = document.getElementById('generate-btn');
        const sortBtn = document.getElementById('sort-btn');

        // Generate random array
        function generateArray() {
            if (sorting) return;
            
            array = [];
            arrayContainer.innerHTML = '';
            
            const arraySize = window.innerWidth < 900 ? 30 : 50;
            
            for (let i = 0; i < arraySize; i++) {
                const value = Math.floor(Math.random() * 300) + 10;
                array.push(value);
                
                const bar = document.createElement('div');
                bar.className = 'array-bar';
                bar.style.height = `${value}px`;
                bar.style.width = `${800 / arraySize - 2}px`;
                arrayContainer.appendChild(bar);
            }
        }

        // Bubble sort with animation
        async function bubbleSort() {
            sorting = true;
            generateBtn.disabled = true;
            sortBtn.disabled = true;
            sortBtn.classList.add('loading');
            
            const bars = document.querySelectorAll('.array-bar');
            
            for (let i = 0; i < array.length - 1; i++) {
                for (let j = 0; j < array.length - i - 1; j++) {
                    // Highlight comparing elements
                    bars[j].classList.add('comparing');
                    bars[j + 1].classList.add('comparing');
                    
                    await sleep(50);
                    
                    if (array[j] > array[j + 1]) {
                        // Highlight swapping elements
                        bars[j].classList.add('swapping');
                        bars[j + 1].classList.add('swapping');
                        
                        // Swap in array
                        [array[j], array[j + 1]] = [array[j + 1], array[j]];
                        
                        // Animate swap
                        bars[j].style.height = `${array[j]}px`;
                        bars[j + 1].style.height = `${array[j + 1]}px`;
                        
                        await sleep(100);
                        
                        bars[j].classList.remove('swapping');
                        bars[j + 1].classList.remove('swapping');
                    }
                    
                    bars[j].classList.remove('comparing');
                    bars[j + 1].classList.remove('comparing');
                }
                
                // Mark as sorted
                bars[array.length - 1 - i].classList.add('sorted');
                await sleep(50);
            }
            
            // Mark first element as sorted
            bars[0].classList.add('sorted');
            
            // Final celebration animation
            for (let i = 0; i < bars.length; i++) {
                setTimeout(() => {
                    bars[i].style.transform = 'scaleY(1.2)';
                    setTimeout(() => {
                        bars[i].style.transform = 'scaleY(1)';
                    }, 200);
                }, i * 30);
            }
            
            sorting = false;
            generateBtn.disabled = false;
            sortBtn.disabled = false;
            sortBtn.classList.remove('loading');
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // Event listeners
        generateBtn.addEventListener('click', generateArray);
        sortBtn.addEventListener('click', bubbleSort);

        // Generate initial array
        generateArray();

        // Add some interactive particles
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.backgroundColor = '#00ffff';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '0';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = '-5px';
            particle.style.boxShadow = '0 0 10px #00ffff';
            
            document.body.appendChild(particle);
            
            const duration = Math.random() * 3000 + 2000;
            particle.animate([
                { transform: 'translateY(0px)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 10}px)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'linear'
            }).onfinish = () => {
                particle.remove();
            };
        }

        // Create particles periodically
        setInterval(createParticle, 200);