let obj = {
    os: 'android',
    val: 45,
    fn: () => console.log(`This is object`)
};
console.log(`Os is ${obj.os}`);
obj.fn();
console.log(`Val is ${obj['val']}`);
function cb(dt) {
    console.log(`Speed is ${dt['speed']}`);
    console.log(`Speed is ${dt}`);
    dt['speed'] = 40;
}
function cbProper(cr) {
    console.log(`Name is ${cr.crWt}`);
}
cb(() => console.log('hi'));
// cbProper(null)
