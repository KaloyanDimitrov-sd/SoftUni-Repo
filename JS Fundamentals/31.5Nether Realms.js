function netherRealms(inputArray) {
    let pattern = /,\s*/g;
    let demons = inputArray[0].split(pattern);
    let patternHealth = /[^0-9+\-*\/.]/g;
    let patternDamage = /[-+]?[\d]+(\.[\d]+)?/g;
    let array = [];

    for (let element of demons) {
        element = element.replace(/\s+/g, "");
        let letters = element.match(patternHealth);
        let health = 0;
        if (letters !== null) {
            for (let i = 0; i < letters.length; i++) {
                health += letters[i].charCodeAt(0);
            }
        }
        let nums = element.match(patternDamage);
        let damage = 0;
        if (nums !== null) {
            damage = nums.map(Number).reduce((acc,a) => acc + a);
            let multiplier = 0;
            for (let i = 0; i < element.length; i++) {
                if (element[i] === "*") {
                    // damage *= 2;
                    multiplier++;
                }
                if (element[i] === "/") {
                    // damage /= 2;
                    multiplier--;
                }
            }

            if (multiplier > 0) {
                damage *= Math.pow(2, multiplier);
            } else if (multiplier < 0) {
                damage /= Math.pow(2, multiplier);
            }
        }
        array.push([element, health, damage.toFixed(2)]);
    }

    array.sort((a,b) => a[0].localeCompare(b[0]));

    array.forEach(x => console.log(`${x[0]} - ${x[1]} health, ${x[2]} damage`));
}

// netherRealms([ 'M3ph-0.5s-0.5t0.0**' ]);
netherRealms([ '-+0.0       05.-0.009aA']);