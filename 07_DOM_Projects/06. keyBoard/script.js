const insert = document.querySelector('#insert');

window.addEventListener('keyup', (e) => {
    insert.innerHTML = `
        <div>
            <table>
                <tr>
                    <td>key</td>
                    <td>keyCode</td>
                    <td>code</td>
                </tr>
                <tr>
                    <td>${e.key === ' ' ? 'Space' : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
        `;
});
