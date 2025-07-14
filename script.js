let c = 0;
function incr ()
{
    const p = document.getElementById('count');
    c++;
    p.textContent = c;
}
function decr ()
{
    const p = document.getElementById('count');
    c--;
    p.textContent = c;
}
function reset ()
{
    const p = document.getElementById('count');
    c = 0;
    p.textContent = c;
}
