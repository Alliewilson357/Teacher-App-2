document.getElementById("student-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const studentName = document.getElementById("student-name").value.trim();
    const studentGrade = document.getElementById("student-grade").value.trim();
    const studentIEP = document.getElementById("student-iep").value.trim();

    if (!studentName || !studentGrade || !studentIEP) {
        alert("All fields are required.");
        return;
    }

    alert(`Profile Created:\nName: ${studentName}\nGrade: ${studentGrade}\nIEP: ${studentIEP}`);
});

document.getElementById("lesson-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const groupLevel = document.getElementById("group-level").value;
    const lessonFocus = document.getElementById("lesson-focus").value.trim();

    if (!groupLevel || !lessonFocus) {
        alert("All fields are required.");
        return;
    }

    alert(`Lesson Plan for ${groupLevel} with Focus on ${lessonFocus} is being generated.`);
});

document.getElementById("consult-ai").addEventListener("click", async function() {
    const studentName = document.getElementById("student-name").value;
    const studentGrade = document.getElementById("student-grade").value;
    const studentIEP = document.getElementById("student-iep").value;
    const groupLevel = document.getElementById("group-level").value;
    const lessonFocus = document.getElementById("lesson-focus").value;

    if (!studentName || !studentGrade || !studentIEP || !groupLevel || !lessonFocus) {
        alert("All fields are required.");
        return;
    }

    document.getElementById("ai-output").textContent = "Loading AI recommendations...";
    try {
        const response = await fetch('http://localhost:5000/api/generate-recommendations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentName, gradeLevel: studentGrade, iepAccommodations: studentIEP, groupLevel, lessonFocus })
        });

        const data = await response.json();
        document.getElementById("ai-output").textContent = data.success ? data.recommendations : "Error generating recommendations.";
    } catch (error) {
        console.error(error);
        document.getElementById("ai-output").textContent = "An error occurred.";
    }
});

document.getElementById("ai-feedback-form").addEventListener("submit", async function(event) {
    event.preventDefault


