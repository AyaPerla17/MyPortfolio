const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'completed').length;
    const inProgress = tasks.filter(t => t.status === 'in-progress').length;

    document.getElementById('totalTasks').textContent = `Total: ${total}`;
    document.getElementById('completedTasks').textContent = `Terminées: ${completed}`;
    document.getElementById('pendingTasks').textContent = `En cours: ${inProgress}`;
}

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.status;
        li.innerHTML = `
            <span>${task.text}</span>
            <div class="task-actions">
                <button class="done">✔</button>
                <button class="in-progress">⏳</button>
                <button class="delete">🗑</button>
            </div>
        `;

        // Bouton terminé
        li.querySelector('.done').addEventListener('click', () => {
            task.status = 'completed';
            renderTasks();
            updateStats();
        });

        // Bouton en cours
        li.querySelector('.in-progress').addEventListener('click', () => {
            task.status = 'in-progress';
            renderTasks();
            updateStats();
        });

        // Bouton supprimer
        li.querySelector('.delete').addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
            updateStats();
        });

        taskList.appendChild(li);
    });
}

addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if(text){
        tasks.push({ text, status: 'pending' });
        taskInput.value = '';
        renderTasks();
        updateStats();
    }
});

// Entrée clavier
taskInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        addBtn.click();
    }
});
