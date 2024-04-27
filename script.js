document.addEventListener('DOMContentLoaded', function() {
    const root = document.getElementById('root');  

    const textarea = document.createElement('textarea');  
    textarea.id = 'inputText';  
    textarea.placeholder = 'Enter text here...';  
    root.appendChild(textarea);  

    const button = document.createElement('button');  
    button.textContent = 'Submit';  
    root.appendChild(button);  

    const table = document.createElement('table');  
    root.appendChild(table);  

    button.addEventListener('click', function() {  
        const text = textarea.value;  
        const words = text.split(/\s+/);  
        const frequency = {};  

        words.forEach(function(word) {  
            if (word) {  
                frequency[word] = (frequency[word] || 0) + 1;  
            }
        });

        
        console.log(frequency);

        
        const sortedWords = Object.keys(frequency).sort((a, b) => {
            return frequency[b] - frequency[a] || a.localeCompare(b);
        }).slice(0, 5);  

        
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        
        const header = table.insertRow();
        header.insertCell().textContent = 'Word';
        header.insertCell().textContent = 'Frequency';

        
        sortedWords.forEach(function(word) {
            const row = table.insertRow();  
            row.insertCell().textContent = word;  
            row.insertCell().textContent = frequency[word];  
        });
    });
});
