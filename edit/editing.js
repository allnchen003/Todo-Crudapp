document.addEventListener("DOMContentLoaded", () =>{
    const urlParam = new URLSearchParams(window.location.search);

    document.getElementById("title").value = urlParam.get('title');
    document.getElementById("date").value = urlParam.get('date');
    if(urlParam.get('status') === "Pending"){
        document.getElementById("status2").checked = true;
    }
    else{
        document.getElementById("status1").checked = true;
    }
});


document.getElementById('taskForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const urlParam = new URLSearchParams(window.location.search);
    if(document.getElementById("status1").checked == true){
        checked = "Complete";
    }
    else{
        checked = "Pending";
    }
    const toDoTask = {
        id: urlParam.get('id'),
        title: document.getElementById("title").value,
        date: document.getElementById("date").value,
        status: checked
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
        

        alert('Task edited successfully!');
        window.location.href = '../todo.html';
        
    } catch (error) {
        console.error("Error:", error);
        alert('Failed to add task');
    }
});
