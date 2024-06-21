const students=[
    {rollNumber:"21bce7780",name:"UdayKiran",result:"Pass"},
    {rollNumber:"21bce8199",name:"Abhinaya",result:"Pass"},
    {rollNumber:"21bce000",name:"Latif",result:"Fail"},
    {rollNumber:"001",name:"Ram",result:"Fail"}
];

function searchResult(){
    const rollNumber=document.getElementById("rollNumber").value;
    const resultContainer=document.getElementById("resultContainer");
    const shareButtons=document.querySelectorAll('.shareButton');

    const student=students.find(student =>student.rollNumber===rollNumber);
    if(student){
        resultContainer.innerHTML=`<p>Name :  ${student.name}</p><p>Result :  ${student.result}  </p>`
        shareButtons.forEach(button => {
            button.classList.remove('hidden');
        });
    }
    else{
        resultContainer.innerHTML=`<p>Result not found </p>`
        shareButtons.forEach(button => {
            button.classList.remove('hidden');
        });
    }
}


function printResult(){
    const resultContainer=document.getElementById("resultContainer").innerHTML;
    window.print();
}
function shareByEmail(){
    const resultContainer=document.getElementById("resultContainer")
    .innerText;
    const emaillink=`mailto:?subject=Student Result&body=
    ${encodeURIComponent(resultContainer)}`;
    window.location.href=emaillink;
}
function shareByWhatsapp(){
    const resultContainer=document.getElementById("resultContainer")
    .innerText;
    const whatsapplink=`https://api.whatsapp.com/send?text=
    ${encodeURIComponent(resultContainer)}`;
    window.open(whatsapplink,"_blank");
}