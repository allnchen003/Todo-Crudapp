document.addEventListener("DOMContentLoaded", getTasks)

async function getTasks(){
    try{
        const response = await fetch('http://localhost:8080/task')
        if(response.ok){
            const tasks = await response.json()
            const tabl = document.getElementById("tabl");
            tasks.forEach(task => {
                const row = document.createElement("tr");
                
                row.innerHTML= `
                <td id="id">${task.id}</td>
                <td id="title">${task.title}</td>
                <td id="date">${task.date}</td>
                <td id="status">${task.status}</td>
                <td><button id="mc" onclick='markComplete(${task.id},"${task.title}","${task.date}","${task.status}")'>Mark Completed</button></td>
                <td><button id="ed" onclick='editTask(${task.id},"${task.title}","${task.date}","${task.status}")'>Edit</button></td>
                <td><button id="del" onclick="deleteTask(${task.id})">Delete</button></td>
                `;
                tabl.appendChild(row);
            })
        }
    } catch(error){
        console.error("Error fetching tasks:", error);
    }
}
function editTask(id, title, date, status){
    window.location.href = `edit/edit.html?id=${id}&title=${title}&date=${date}&status=${status}`;
}
async function markComplete(id, title, date, status) {
    const updatedTask={
        id: id,
        title: title,
        date: date,
        status: "Complete"
    }
    try{
        const response = await fetch(`http://localhost:8080/task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        });
        if (response.ok){
            window.location.reload();
        }
    } catch (error){
        console.error("Error deleting task:", error);
    }
}
async function deleteTask(id) {
    try {
        const response = await fetch(`http://localhost:8080/task/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            window.location.reload();
        } else {
            console.error('Failed to delete task:', response.status);
        }
    } catch (error) {
        console.error("Error deleting task:", error);
    }
}
