function createRows(rowNum) {
    for (r=0; r<rowNum; r++) {
        let row= document.createElement("div");
        mainContainer.appendChild(row).className="gridRow";
    };
};




function createColumns(cellNum){
    for (i=0; i<rows.clientHeight; i++){
        for (j=0; j<cellNum; j++){
            let newCell= document.createElementElement("div");
            rows [j].appendChild(newCell).className ="cell";
        };
    };
};