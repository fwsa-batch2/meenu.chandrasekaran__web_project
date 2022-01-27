function teacher() {
    let x = document.getElementById('teach').value;

    if (x === 'A0001') {
        localStorage.setItem("Teacher","chitra");
        window.open('teacher.html');
    }else if (x === 'A0002') {
        localStorage.setItem("Teacher","raghu");
        window.open('teacher.html');
    }else if (x === 'A0003') {
        localStorage.setItem("Teacher","revathi");
        window.open('teacher.html');
    }else if (x === 'A0004') {
        localStorage.setItem("Teacher","selvi");
        window.open('teacher.html');
    }else {
        alert('Please Check Your ID')
    }

}