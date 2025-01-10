
    document.getElementById('taskForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const toDoTask = {
            title: document.getElementById("title").value,
            date: document.getElementById("date").value,
            status: "Pending"
        };
        
        const baseURL = "http://localhost:8080/task";
        
        try {
            const response = await fetch(baseURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(toDoTask)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
   
            alert('Task added successfully!');
            window.location.href = '../todo.html';
            
        } catch (error) {
            console.error("Error:", error);
            alert('Failed to add task');
        }
    });