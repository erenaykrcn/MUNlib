let current = false;

const id_dict = {
    'guides': 'gu-ang',
    'pros': 'pros-ang',
    'resos': 'resos-ang',
    'others': 'others-ang',
}

const dic = {
    'guides': 'Guides',
    'pros': 'Procedures',
    'resos': 'Legislative Documents',
    'others': 'Other Documents'
}

function openAll(val) {
    document.getElementsByClassName("all_tabs")[0].style.height="auto";
    switch (val) {
        case 'Guides':
            if (!current) {
                document.getElementById("guides").style.display="block";
                document.getElementById("guides").style.height="auto"; 
                document.getElementById("gu-ang").className = "fas fa-angle-up ic";
                document.getElementById("see-guides").innerText = "Hide Guides";
                current = "guides";
            } else {
                document.getElementById(current).style.display="none";
                document.getElementById(current).style.height="0"; 
                document.getElementById(id_dict[current]).className = "fas fa-angle-down ic";
                document.getElementById("see-"+current).innerText = "See " + dic[current];

                if (current==='guides') {
                    current = false;
                } else {
                    document.getElementById("guides").style.display="block";
                    document.getElementById("guides").style.height="auto"; 
                    document.getElementById("gu-ang").className = "fas fa-angle-up ic";
                    document.getElementById("see-guides").innerText = "Hide Guides";
                    current = 'guides';
                }
            } 
            break
        case 'Pros':
            if (!current) {
                document.getElementById("pros").style.display="block";
                document.getElementById("pros").style.height="auto"; 
                document.getElementById("pros-ang").className = "fas fa-angle-down ic";
                document.getElementById("see-pros").innerText = "Hide Procedures";
                current = "pros";
            } else {
                document.getElementById(current).style.display="none";
                document.getElementById(current).style.height="0"; 
                document.getElementById(id_dict[current]).className = "fas fa-angle-down ic";
                document.getElementById("see-"+current).innerText = "See "+dic[current];

                if (current==='pros') {
                    current = false;
                } else {
                    document.getElementById("pros").style.display="block";
                    document.getElementById("pros").style.height="auto"; 
                    document.getElementById("pros-ang").className = "fas fa-angle-up ic";
                    document.getElementById("see-pros").innerText = "Hide Guides";
                    current = 'pros';
                }
                
            }  
            break
        case 'Resos':
            if (!current) {
                document.getElementById("resos").style.display="block";
                document.getElementById("resos").style.height="auto"; 
                document.getElementById("resos-ang").className = "fas fa-angle-up ic";
                document.getElementById("see-resos").innerText = "Hide Legislative Documents";
                current = "resos";
            } else {
                document.getElementById(current).style.display="none";
                document.getElementById(current).style.height="0"; 
                document.getElementById(id_dict[current]).className = "fas fa-angle-down ic";
                document.getElementById("see-"+current).innerText = "See " + dic[current]; 

                if (current==='resos') {
                    current = false;
                } else {
                    document.getElementById("resos").style.display="block";
                    document.getElementById("resos").style.height="auto"; 
                    document.getElementById("resos-ang").className = "fas fa-angle-up ic";
                    document.getElementById("see-resos").innerText = "Hide Legislative Documents";
                    current = 'resos';
                }

            }    
            break
        case 'Others':
            if (!current) {
                document.getElementById("others").style.display="block";
                document.getElementById("others").style.height="auto"; 
                document.getElementById("others-ang").className = "fas fa-angle-up ic";
                document.getElementById("see-others").innerText = "Hide Other Documents";
                current = "others";
            } else {
                document.getElementById(current).style.display="none";
                document.getElementById(current).style.height="0"; 
                document.getElementById(id_dict[current]).className = "fas fa-angle-down ic";
                document.getElementById("see-"+current).innerText = "See " + dic[current];

                if (current==='others') {
                    current = false;
                } else {
                    document.getElementById("others").style.display="block";
                    document.getElementById("others").style.height="auto"; 
                    document.getElementById("others-ang").className = "fas fa-angle-up ic";
                    document.getElementById("see-others").innerText = "Hide Other Documents";
                    current = 'others';
                }
                

            }           
    }
}

export default openAll