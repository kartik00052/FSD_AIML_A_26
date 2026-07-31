const sum = (...numbers) => {
const s=numbers.reduce((s,i)=>s+i,0);
return s;
}