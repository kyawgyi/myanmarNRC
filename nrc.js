(function ( $ ) {
 
    $.fn.mmnrc = function() {
        
 		this.append(`
 			<input type="hidden" value="nrc" class="nrc_combine"/>
 		<div class="state">
    		<select></select>
    	</div>
    	<div class="district">
    		<select></select>
    	</div>
    	<div class="type">
    		<select></select>
    	</div>
    	<div class="number">
    		<input type="text" />
    	</div>`);

    	this.addClass('nrc_wrap');

    	let container = this;
        
        let state_control 	 = $(".state select",this);
        let district_control = $(".district select",this);
        let type_control 	 = $(".type select",this);
        let number_control 	 = $(".number input",this);

        data.forEach(function(ele){
        	state_control.append("<option value='"+ele.state+"'>"+ele.state+"</option>");
        })

        type.forEach(function(ele){
        	type_control.append("<option value='"+ele+"'>"+ele+"</option>");
        })

        state_control.change(function(){
        	var state_selected = $(this).val();
        	getDistricts(state_selected).forEach(function(ele){
        		district_control.append("<option value='"+ele+"'>"+ele+"</option>");
        	})
        	 updateNRC(container,state_control,district_control,type_control,number_control);
        });

        district_control.change(function(){
        	updateNRC(container,state_control,district_control,type_control,number_control);
        })

        type_control.change(function(){
        	updateNRC(container,state_control,district_control,type_control,number_control);
        })

        number_control.keyup(function(){
        	updateNRC(container,state_control,district_control,type_control,number_control);
        })
 
    };
 
}( jQuery ));

function updateNRC(container,state_control,district_control,type_control,number_control){
	$(".nrc_combine",container).val(state_control.val()+"/"+district_control.val()+"("+type_control.val()+")"+number_control.val());
}

function getDistricts(state){
	var district = null;
	data.forEach(function(ele){
		if(ele.state == state){
			district =  ele.district;
		}
    });
    return district;
}

let type = ["\u1014\u102d\u102f\u1004\u103a","\u1015\u103c\u102f"];

let data = [{"state":"1","district":["\u1000\u1010\u1014","\u1000\u1019\u1010","\u1000\u1019\u1014","\u1001\u1010\u1012","\u1001\u1016\u1014","\u1001\u1018\u1012","\u1006\u1012\u1014","\u1010\u1014\u1014","\u1014\u1019\u1014","\u1015\u1000\u1010","\u1015\u100a\u1014","\u1015\u1010\u1021","\u1015\u1018\u1010","\u1017\u1019\u1014","\u1019\u1000\u1000","\u1019\u1000\u1010","\u1019\u1000\u1011","\u1019\u1000\u1014","\u1019\u1000\u101b","\u1019\u1001\u1018","\u1019\u1002\u1012","\u1019\u1005\u1014","\u1019\u100a\u1014","\u1019\u1011\u1014","\u1019\u1018\u1014","\u1019\u1018\u1015","\u1019\u1019\u1014","\u1019\u1021\u1014","\u101b\u1000\u1014","\u101b\u1014\u1000","\u101c\u1001\u1014","\u101c\u1002\u1014","\u101c\u1019\u1014","\u101d\u1019\u1014","\u101e\u1010\u1014","\u101f\u1001\u1014","\u101f\u1015\u1014","\u1021\u1001\u1000","\u1021\u1002\u101a","\u1021\u1015\u1014","\u1025\u1019\u1014"]},{"state":"2","district":["\u1000\u1019\u1014","\u1000\u101c\u1014","\u1000\u101c\u101d","\u1000\u101d\u1014","\u1002\u101c\u1014","\u1012\u1019\u1006","\u1012\u1019\u101e","\u1015\u1010\u1000","\u1016\u1006\u1014","\u1016\u101b\u1006","\u1018\u101c\u1001","\u1019\u1002\u1010","\u1019\u1002\u1012","\u1019\u101b\u1014","\u101b\u1000\u1014","\u101b\u1010\u1014","\u101c\u1000\u1014","\u101c\u1019\u1010","\u1021\u101c\u1014","\u1025\u1000\u101c"]},{"state":"3","district":["\u1000\u1000\u1014","\u1000\u1000\u101b","\u1000\u1001\u1014","\u1000\u1005\u1000","\u1000\u1006\u1000","\u1000\u1019\u1014","\u1000\u101c\u1014","\u1010\u1000\u1014","\u1010\u1006\u1000","\u1010\u1010\u1014","\u1010\u101a\u1014","\u1010\u1021\u1014","\u1014\u1010\u101c","\u1015\u1000\u1014","\u1015\u1021\u1014","\u1016\u1015\u1014","\u1016\u1021\u1014","\u1017\u1021\u1014","\u1018\u1000\u1006","\u1018\u101c\u1014","\u1018\u101e\u1006","\u1018\u1021\u1014","\u1019\u101d\u1010","\u101c\u1005\u1014","\u101c\u1018\u1014","\u101c\u101b\u1014","\u101c\u101e\u1014","\u101e\u1000\u1014","\u101e\u1010\u1000","\u101e\u1010\u1014","\u101e\u1011\u1014","\u1021\u1021\u1014"]},{"state":"4","district":["\u1000\u1000\u1014","\u1000\u1015\u101c","\u1000\u101d\u101c","\u1010\u1007\u1014","\u1010\u1010\u1014","\u1010\u1010\u101c","\u1011\u1010\u101c","\u1013\u1019\u1014","\u1015\u101c\u1014","\u1015\u101c\u101d","\u1016\u1015\u1014","\u1016\u101c\u1014","\u1019\u1010\u1014","\u1019\u1010\u1015","\u1019\u1019\u1000","\u1019\u101c\u1014","\u101b\u1007\u1014","\u101f\u1001\u1014"]},{"state":"5","district":["\u1000\u1006\u1014","\u1000\u1010\u101c","\u1000\u1014\u1014","\u1000\u1018\u101c","\u1000\u101c\u1010","\u1000\u101c\u1011","\u1000\u101c\u1014","\u1000\u101c\u101d","\u1000\u101c\u101e","\u1000\u101e\u1014","\u1001\u1010\u1014","\u1001\u1015\u1014","\u1001\u1019\u1014","\u1001\u1025\u1000","\u1001\u1025\u1010","\u1001\u1025\u1014","\u1004\u1007\u1014","\u1005\u1000\u1014","\u1005\u1000\u101b","\u1005\u101e\u1014","\u1006\u1000\u1015","\u1006\u101c\u1000","\u100a\u1014\u1014","\u1010\u1004\u1014","\u1010\u1006\u1014","\u1010\u1019\u1014","\u1010\u101e\u1014","\u1011\u1001\u1014","\u1011\u1025\u1010","\u1012\u1015\u101a","\u1013\u1000\u1014","\u1015\u1016\u1014","\u1015\u101b\u1014","\u1015\u101c\u1014","\u1015\u101c\u1018","\u1015\u101c\u101e","\u1016\u1015\u1014","\u1017\u1019\u1014","\u1018\u1010\u101c","\u1018\u1021\u1014","\u1019\u1000\u1014","\u1019\u1019\u1000","\u1019\u1019\u1010","\u1019\u1019\u1014","\u1019\u1019\u101b","\u1019\u101a\u1014","\u1019\u101b\u1000","\u1019\u101b\u1014","\u1019\u101c\u1014","\u101a\u1019\u1015","\u101b\u1010\u1014","\u101b\u1010\u101b","\u101b\u1011\u1014","\u101b\u1018\u1014","\u101b\u101e\u1014","\u101b\u101e\u101a","\u101b\u1021\u1014","\u101b\u1025\u1014","\u101c\u1019\u1014","\u101c\u101b\u1014","\u101c\u101d\u1014","\u101d\u101c\u1014","\u101d\u101e\u1014","\u101e\u1000\u1014","\u101e\u1000\u101c","\u101f\u1019\u101c","\u1021\u1010\u1014","\u1021\u101b\u1010","\u1021\u101b\u101e"]},{"state":"6","district":["\u1000\u1005\u1014","\u1000\u1015\u1014","\u1000\u101a\u101a","\u1000\u101b\u1014","\u1000\u101c\u1021","\u1000\u101e\u1010","\u1000\u101e\u1014","\u1001\u1019\u1000","\u1010\u1002\u1014","\u1010\u1013\u1014","\u1010\u1015\u1014","\u1010\u101d\u1014","\u1010\u101e\u1014","\u1010\u101e\u101b","\u1011\u101d\u1014","\u1015\u1000\u1019","\u1015\u1010\u1014","\u1015\u1014\u101c","\u1015\u101c\u1010","\u1015\u101c\u1014","\u1015\u101e\u1014","\u1016\u1019\u1014","\u1017\u1021\u101b","\u1018\u1015\u1014","\u1018\u101c\u1014","\u1019\u1000\u1014","\u1019\u1002\u1010","\u1019\u1010\u101b","\u1019\u1019\u1014","\u1019\u101c\u1014","\u1019\u101c\u101c","\u1019\u1021\u1014","\u1019\u1021\u101b","\u101b\u1015\u1014","\u101b\u1016\u1014","\u101c\u1000\u1014","\u101c\u101c\u1014","\u101d\u1000\u1014","\u101d\u1011\u1014","\u101e\u101b\u1001"]},{"state":"7","district":["\u1000\u1000\u1001","\u1000\u1000\u1014","\u1000\u1000\u1015","\u1000\u1000\u101b","\u1000\u1004\u1014","\u1000\u1005\u1014","\u1000\u1010\u1001","\u1000\u1010\u1014","\u1000\u1011\u1001","\u1000\u1015\u1000","\u1000\u1015\u1010","\u1000\u1015\u1014","\u1000\u1019\u1000","\u1000\u101d\u1014","\u1000\u101e\u1014","\u1005\u1001\u1014","\u1005\u1019\u1014","\u1007\u1000\u1014","\u100a\u101c\u1015","\u1010\u1004\u1014","\u1010\u1006\u1014","\u1010\u1010\u1001","\u1010\u1019\u1014","\u1010\u101d\u1014","\u1011\u1010\u1015","\u1012\u1025\u1014","\u1013\u1019\u1014","\u1013\u1025\u1014","\u1014\u1010\u101c","\u1015\u1001\u1010","\u1015\u1001\u1014","\u1015\u1005\u1014","\u1015\u1007\u1014","\u1015\u1010\u1000","\u1015\u1010\u1001","\u1015\u1010\u1010","\u1015\u1010\u1014","\u1015\u1013\u1014","\u1015\u1016\u1014","\u1015\u1019\u1014","\u1015\u101c\u1014","\u1015\u101d\u1000","\u1016\u1001\u1014","\u1016\u1010\u1014","\u1016\u1015\u1014","\u1016\u1019\u1014","\u1016\u1025\u1014","\u1017\u1010\u1014","\u1017\u1019\u1014","\u1019\u1000\u1014","\u1019\u1001\u1014","\u1019\u1005\u1014","\u1019\u100a\u1014","\u1019\u1010\u1014","\u1019\u101c\u1014","\u101b\u1000\u1010","\u101b\u1000\u1014","\u101b\u1010\u1014","\u101b\u1010\u101b","\u101b\u1015\u1010","\u101b\u1019\u1010","\u101b\u1019\u1014","\u101c\u1000\u1014","\u101c\u1015\u1010","\u101c\u1015\u1014","\u101c\u1019\u1010","\u101c\u1019\u1014","\u101d\u1001\u1019","\u101d\u1010\u1014","\u101d\u1019\u1014","\u101e\u1040\u1010","\u101e\u1000\u1014","\u101e\u1006\u1014","\u101e\u1014\u1015","\u101e\u1015\u1014","\u101e\u101c\u1015","\u101e\u101c\u101d","\u101e\u101d\u1000","\u101e\u101d\u1010","\u101e\u101d\u1014","\u1021\u1010\u1014","\u1021\u1015\u1014","\u1021\u1016\u1004","\u1021\u1016\u1014","\u1021\u1018\u1014","\u1021\u1019\u1014"]},{"state":"8","district":["\u1040\u1001\u1000","\u1000\u1010\u1000","\u1000\u1010\u1010","\u1000\u1015\u1014","\u1000\u1019\u1014","\u1000\u101c\u1014","\u1001\u1019\u1014","\u1002\u1002\u1014","\u1004\u1016\u1014","\u1005\u1010\u101b","\u1005\u101c\u1014","\u1006\u1010\u1000","\u1006\u1015\u1014","\u1006\u1015\u101d","\u1006\u1016\u1014","\u1006\u1019\u1014","\u1006\u101c\u1014","\u1010\u1000\u1000","\u1010\u1010\u1000","\u1011\u101c\u1014","\u1014\u1015\u1014","\u1014\u1019\u1014","\u1014\u1019\u1025","\u1014\u101c\u1014","\u1015\u1000\u1014","\u1015\u1001\u1000","\u1015\u1001\u1010","\u1015\u1016\u1014","\u1015\u1019\u1014","\u1018\u101b\u1014","\u1018\u101c\u1014","\u1019\u1000\u1014","\u1019\u1001\u1000","\u1019\u1001\u1014","\u1019\u1010\u1014","\u1019\u1011\u1014","\u1019\u1014\u1019","\u1019\u1018\u1014","\u1019\u1019\u1014","\u1019\u101c\u1014","\u1019\u101e\u1014","\u1019\u1021\u101b","\u101b\u1000\u1014","\u101b\u1005\u1000","\u101b\u1010\u1014","\u101b\u1014\u1001","\u101b\u1019\u1000","\u101b\u1025\u1019","\u101e\u101b\u1014","\u101e\u101c\u1014","\u101f\u1019\u1014","\u1021\u1019\u101b","\u1021\u101c\u1014","\u1025\u1019\u1014"]},{"state":"9","district":["\u1000\u1000\u101b","\u1000\u1001\u1010","\u1000\u1006\u1014","\u1000\u1015\u1010","\u1000\u1015\u1018","\u1000\u1018\u1014","\u1000\u1019\u1000\u1014","\u1000\u1019\u1010","\u1000\u1019\u1014","\u1000\u101d\u1010","\u1000\u101e\u1014","\u1001\u1019\u1001","\u1001\u1019\u1005","\u1001\u1019\u1014","\u1001\u1021\u1007","\u1004\u1007\u1014","\u1004\u101e\u101b","\u1005\u1000\u1010","\u1005\u1000\u1014","\u1005\u1000\u101b","\u1005\u1010\u1010","\u1005\u1010\u1014","\u1005\u101e\u1014","\u1007\u1007\u1014","\u1007\u1015\u101e","\u1007\u1017\u101e","\u1007\u101a\u101e","\u100a\u1025\u1014","\u100a\u1025\u101c","\u1010\u1000\u1010","\u1010\u1000\u1014","\u1010\u1010\u1000","\u1010\u1010\u1025","\u1010\u1015\u1010","\u1010\u1019\u1014","\u1010\u101a\u1014","\u1010\u101e\u1014","\u1012\u1001\u101e","\u1012\u100f\u101e","\u1014\u1010\u1000","\u1014\u1011\u1000","\u1015\u1000\u1001","\u1015\u1000\u1005","\u1015\u1001\u1014","\u1015\u1010\u1001","\u1015\u1010\u1014","\u1015\u1010\u101c","\u1015\u1014\u101c","\u1015\u1017\u101e","\u1015\u1018\u1014","\u1015\u1019\u1014","\u1015\u101c\u1014","\u1015\u101e\u1000","\u1015\u101e\u1014","\u1015\u1025\u101c","\u1017\u1019\u1014","\u1019\u1000\u1014","\u1019\u1001\u1014","\u1019\u1010\u1014","\u1019\u1010\u1019","\u1019\u1010\u101b","\u1019\u1010\u101c","\u1019\u1011\u101c","\u1019\u1014\u1000","\u1019\u1014\u1010","\u1019\u1014\u1019","\u1019\u1014\u101c","\u1019\u1015\u1014","\u1019\u1016\u1014","\u1019\u1018\u1014","\u1019\u1019\u1010","\u1019\u1019\u1014","\u1019\u101a\u1010","\u1019\u101a\u1019","\u1019\u101b\u1000","\u1019\u101b\u1010","\u1019\u101b\u1014","\u1019\u101b\u1015","\u1019\u101b\u1018","\u1019\u101b\u1019","\u1019\u101b\u101e","\u1019\u101c\u1014","\u1019\u101e\u1000","\u1019\u101e\u1014","\u1019\u101e\u101b","\u1019\u101f\u1019","\u1019\u1021\u1007","\u1019\u1021\u1014","\u1019\u1021\u101b","\u1019\u1025\u101c","\u101b\u1014\u1001","\u101b\u1018\u1014","\u101b\u1019\u1010","\u101b\u1019\u101e","\u101b\u1025\u1014","\u101c\u1006\u1014","\u101c\u101d\u1014","\u101d\u1010\u1014","\u101d\u1011\u1014","\u101e\u1000\u1019","\u101e\u1001\u1000","\u101e\u1005\u1014","\u101e\u1010\u1014","\u101e\u1013\u1014","\u101e\u1015\u1000","\u101e\u1015\u1010","\u101e\u101b\u1015","\u1021\u1010\u1014","\u1021\u1013\u1014","\u1021\u1019\u1007","\u1021\u1019\u101b","\u1025\u1010\u101e"]},{"state":"10","district":["\u1000\u1000\u1014","\u1000\u1010\u1014","\u1000\u1011\u1014","\u1000\u1019\u101b","\u1000\u101c\u1014","\u1000\u101e\u1014","\u1001\u1005\u1014","\u1001\u1006\u1014","\u1001\u1007\u1014","\u1005\u1010\u1014","\u1006\u1001\u1014","\u1007\u101c\u1019","\u1010\u1016\u1014","\u1010\u1019\u1014","\u1010\u101c\u1014","\u1010\u101d\u1014","\u1015\u1001\u1000","\u1015\u1012\u1014","\u1015\u1019\u1014","\u1016\u1015\u101b","\u1018\u101c\u1014","\u1019\u1000\u1019","\u1019\u1006\u1014","\u1019\u1012\u1014","\u1019\u1013\u1014","\u1019\u1015\u1014","\u1019\u1019\u1014","\u1019\u101c\u1001","\u1019\u101c\u1010","\u1019\u101c\u1014","\u1019\u101c\u1019","\u1019\u1021\u1014","\u1019\u1025\u1014","\u101a\u1015\u101b","\u101b\u1019\u1014","\u101c\u1018\u1014","\u101c\u1019\u1010","\u101c\u1019\u1014","\u101e\u1000\u1014","\u101e\u1001\u101b","\u101e\u1010\u1014","\u101e\u1011\u1014","\u101e\u1011\u101c","\u101e\u1016\u101b","\u101e\u1017\u101b","\u101e\u1019\u101b","\u101e\u101c\u1014","\u1021\u1019\u1014","\u1021\u101c\u1014"]},{"state":"11","district":["\u1000\u1010\u1014","\u1000\u1010\u101c","\u1000\u1016\u1014","\u1000\u1019\u1014","\u1001\u1010\u1014","\u1001\u1019\u1014","\u1002\u1019\u1014","\u1002\u101c\u1019","\u1005\u1010\u1014","\u1005\u101e\u1014","\u1009\u1011\u101e","\u1010\u1000\u1010","\u1010\u1000\u1014","\u1010\u1005\u1014","\u1010\u1015\u101d","\u1010\u1016\u1014","\u1012\u1010\u1002","\u1013\u1013\u1014","\u1015\u100f\u1000","\u1015\u100f\u1010","\u1015\u1010\u1014","\u1015\u1010\u1015","\u1015\u101e\u1010","\u1016\u1021\u1014","\u1018\u1010\u101e","\u1018\u101c\u1014","\u1018\u101e\u1010","\u1019\u1002\u1014","\u1019\u1010\u1014","\u1019\u1015\u1010","\u1019\u1015\u1014","\u1019\u1015\u1019","\u1019\u101c\u1019","\u1019\u1021\u1010","\u1019\u1021\u1014","\u1019\u1025\u1014","\u101b\u1015\u1014","\u101b\u1017\u1014","\u101b\u1019\u1014","\u101b\u101e\u1010","\u101e\u1000\u1014","\u101e\u1010\u1014","\u1021\u1019\u1014"]},{"state":"12","district":["\u1000\u1000\u1000","\u1000\u1001\u1000","\u1000\u1001\u1010","\u1000\u1001\u1014","\u1000\u1001\u101b","\u1000\u1005\u1000","\u1000\u1010\u1000","\u1000\u1010\u1010","\u1000\u1010\u1014","\u1000\u1010\u101c","\u1000\u1011\u1000","\u1000\u1011\u1011","\u1000\u1015\u1010","\u1000\u1015\u1014","\u1000\u1017\u1010","\u1000\u1019\u1000","\u1000\u1019\u1010","\u1000\u1019\u1011","\u1000\u1019\u1014","\u1000\u1019\u101b","\u1000\u1019\u101c","\u1000\u101c\u1011","\u1000\u101c\u1014","\u1000\u101c\u101d","\u1000\u101e\u101b","\u1001\u1001\u1014","\u1001\u1002\u1010","\u1001\u1015\u1014","\u1001\u1019\u1014","\u1001\u101b\u1000","\u1001\u101b\u1014","\u1001\u101b\u101f","\u1002\u101f\u1014","\u1005\u1000\u1014","\u1005\u1001\u1002","\u1005\u1001\u1014","\u1005\u1001\u1019","\u1005\u1002\u1014","\u1005\u1007\u1014","\u1005\u1010\u1014","\u1005\u1015\u1014","\u1005\u1015\u101b","\u1006\u1000\u1001","\u1006\u1000\u1014","\u1006\u1001\u1014","\u1006\u1016\u1014","\u1010\u1000\u1000","\u1010\u1000\u1010","\u1010\u1000\u1014","\u1010\u1001\u1014","\u1010\u1001\u101c","\u1010\u1002\u1010","\u1010\u1004\u1014","\u1010\u1010\u1000","\u1010\u1010\u1010","\u1010\u1010\u1011","\u1010\u1010\u1014","\u1010\u1010\u1015","\u1010\u1011\u1014","\u1010\u1011\u1015","\u1010\u1015\u1014","\u1010\u1016\u1014","\u1010\u1017\u1010","\u1010\u1019","\u1010\u1019\u1010","\u1010\u1019\u1014","\u1010\u101d\u1014","\u1010\u101e\u1014","\u1011\u1000\u1014","\u1011\u1010\u1010","\u1011\u1010\u1015","\u1011\u1010\u1019","\u1011\u1019\u1014","\u1011\u101e\u1014","\u1012\u1000\u1010","\u1012\u1002\u1006","\u1012\u1002\u1010","\u1012\u1002\u1014","\u1012\u1002\u1019","\u1012\u1002\u101b","\u1012\u1012\u101b","\u1012\u1014\u1015","\u1012\u1015\u1014","\u1012\u1016\u1014","\u1012\u101b\u1014","\u1012\u101c\u1014","\u1013\u1001\u1014","\u1013\u1013\u1014","\u1013\u1014\u1016","\u1013\u1014\u1019","\u1013\u101c\u1014","\u1014\u1000\u1010","\u1014\u1000\u101a","\u1014\u1019\u1014","\u1015\u1000\u1010","\u1015\u1001\u1014","\u1015\u1002\u1010","\u1015\u1005\u1010","\u1015\u1006\u1010","\u1015\u1007\u1010","\u1015\u1007\u1014","\u1015\u1010\u1010","\u1015\u1010\u1014","\u1015\u1010\u1021","\u1015\u1017\u1000","\u1015\u1018\u1010","\u1015\u1018\u1014","\u1015\u1019\u1014","\u1015\u101b\u1010","\u1015\u101c\u1014","\u1015\u101e\u1010","\u1015\u101e\u1014","\u1015\u1021\u1010","\u1016\u1015\u1014","\u1016\u101f\u1014","\u1017\u1000\u1010","\u1017\u1000\u101c","\u1017\u1002\u1010","\u1017\u1010\u1000","\u1017\u1010\u1010","\u1017\u1010\u1011","\u1017\u1010\u1014","\u1017\u1010\u101c","\u1017\u1011\u1011","\u1017\u1015\u1014","\u1017\u1018\u1010","\u1017\u1019\u1014","\u1017\u101a\u1014","\u1017\u101b\u1000","\u1017\u101c\u1014","\u1017\u101c\u1017","\u1017\u101f\u1010","\u1017\u101f\u1014","\u1018\u1000\u1010","\u1018\u1000\u101c","\u1018\u1010\u1011","\u1018\u1013\u1014","\u1018\u1015\u1010","\u1018\u101c\u1014","\u1019\u1000\u1010","\u1019\u1000\u1014","\u1019\u1000\u1019","\u1019\u1001\u1014","\u1019\u1002\u1000","\u1019\u1002\u1010","\u1019\u1002\u1012","\u1019\u1002\u1013","\u1019\u1002\u1014","\u1019\u1002\u101c","\u1019\u1002\u101d","\u1019\u1006\u1014","\u1019\u1007\u1010","\u1019\u100a\u1014","\u1019\u1010\u1000","\u1019\u1010\u100a","\u1019\u1010\u1010","\u1019\u1010\u1011","\u1019\u1010\u1014","\u1019\u1010\u101c","\u1019\u1011\u101c","\u1019\u1012\u1002","\u1019\u1012\u1014","\u1019\u1013\u1014","\u1019\u1014\u1000","\u1019\u1014\u1019","\u1019\u1015\u1014","\u1019\u1018\u1010","\u1019\u1018\u1014","\u1019\u1019\u1000","\u1019\u1019\u1010","\u1019\u101a\u1000","\u1019\u101b\u1000","\u1019\u101b\u1010","\u1019\u101b\u1014","\u1019\u101c\u1010","\u1019\u101c\u1014","\u1019\u101d\u1010","\u1019\u101e\u1014","\u1019\u101f\u1014","\u1019\u1021\u1010","\u1019\u1021\u1014","\u1019\u1021\u1015","\u1019\u1021\u101b","\u1019\u1025\u1014","\u101a\u1015\u101e","\u101b\u1000\u1010","\u101b\u1000\u1014","\u101b\u1000\u1019","\u101b\u1010\u1014","\u101b\u1015\u1010","\u101b\u1015\u101e","\u101b\u1019\u1000","\u101b\u101a\u1001","\u101b\u101c\u1014","\u101b\u101e\u1015","\u101c\u1000\u1010","\u101c\u1000\u1014","\u101c\u1000\u1015","\u101c\u1005\u1014","\u101c\u1010\u1010","\u101c\u1010\u1014","\u101c\u1010\u1015","\u101c\u1011\u1014","\u101c\u1015\u1010","\u101c\u1015\u1014","\u101c\u1018\u1014","\u101c\u1019\u1000","\u101c\u1019\u1010","\u101c\u1019\u1014","\u101c\u1019\u101b","\u101c\u1019\u101e","\u101c\u101b\u1014","\u101c\u101c\u1014","\u101c\u101d\u1014","\u101c\u101e\u1014","\u101c\u101e\u1019","\u101c\u101e\u101a","\u101c\u101e\u101b","\u101c\u101e\u101e","\u101c\u1021\u1014","\u101d\u1010\u1014","\u101e\u1000\u1000","\u101e\u1000\u1003","\u101e\u1000\u1010","\u101e\u1000\u1014","\u101e\u1000\u101c","\u101e\u1001\u1000","\u101e\u1001\u1014","\u101e\u1003\u1000","\u101e\u1003\u1010","\u101e\u1003\u1014","\u101e\u100a\u1000","\u101e\u1010\u1000","\u101e\u1010\u1010","\u101e\u1010\u1014","\u101e\u1014\u1015","\u101e\u1015\u1014","\u101e\u1019\u1014","\u101e\u101b\u1014","\u101e\u101c\u1000","\u101e\u101c\u1010","\u101e\u101c\u1014","\u101e\u101c\u1015","\u101e\u101c\u101b","\u101f\u1001\u1014","\u101f\u101e\u1010","\u1021\u1001\u1000","\u1021\u1001\u1014","\u1021\u1002\u1010","\u1021\u1002\u1014","\u1021\u1005\u1014","\u1021\u1005\u101b","\u1021\u1006\u1014","\u1021\u1010\u1014","\u1021\u1011\u1000","\u1021\u1015\u1014","\u1021\u1016\u1014","\u1021\u1019\u1010","\u1021\u1019\u1014","\u1021\u101c\u1000","\u1021\u101c\u1014","\u1021\u101e\u1014","\u1025\u1000\u1000","\u1025\u1000\u1010","\u1025\u1000\u1011","\u1025\u1000\u1014","\u1025\u1000\u1015","\u1025\u1000\u1019","\u1025\u1000\u101c","\u1025\u1010\u1000","\u1025\u1010\u1010","\u1025\u1010\u1019","\u1025\u1015\u1010","\u1025\u101e\u1010"]},{"state":"13","district":["\u1000\u1000\u1014","\u1000\u1000\u101b","\u1000\u1001\u1014","\u1000\u1001\u101c","\u1000\u1005\u1014","\u1000\u1010\u1010","\u1000\u1010\u1014","\u1000\u1010\u101b","\u1000\u1010\u101c","\u1000\u1011\u1014","\u1000\u1019\u1014","\u1000\u1019\u101b","\u1000\u101b\u1014","\u1000\u101c\u1010","\u1000\u101c\u1011","\u1000\u101c\u1012","\u1000\u101c\u1014","\u1000\u101e\u1014","\u1000\u101e\u101f","\u1000\u101f\u1014","\u1001\u101b\u101f","\u1004\u1005\u1014","\u1005\u1000\u1014","\u1006\u1006\u1014","\u100a\u1000\u1014","\u100a\u101b\u1014","\u1010\u1000\u1014","\u1010\u1001\u1000","\u1010\u1001\u1014","\u1010\u1001\u101c","\u1010\u1005\u101c","\u1010\u1010\u1014","\u1010\u1011\u1014","\u1010\u1015\u1014","\u1010\u1019\u100a","\u1010\u101a\u1014","\u1010\u101b\u1014","\u1010\u101c\u1014","\u1010\u101f\u1014","\u1014\u1001\u1010","\u1014\u1001\u1014","\u1014\u1001\u1019","\u1014\u1005\u1010","\u1014\u1005\u1014","\u1014\u1006\u1014","\u1014\u1010\u101a","\u1014\u1010\u101b","\u1014\u1019\u1000","\u1014\u1019\u1010","\u1014\u1019\u1014","\u1015\u1006\u1010","\u1015\u1007\u1010","\u1015\u1010\u101a","\u1015\u1018\u1010","\u1015\u101a\u1014","\u1015\u101c\u1010","\u1015\u101c\u1014","\u1015\u101e\u101b","\u1016\u1001\u1014","\u1017\u1006\u1014","\u1018\u1021\u1014","\u1019\u1000\u1010","\u1019\u1000\u1014","\u1019\u1001\u1014","\u1019\u1004\u1014","\u1019\u1006\u1000","\u1019\u1006\u1010","\u1019\u1006\u1014","\u1019\u1006\u101c","\u1019\u1010\u1010","\u1019\u1010\u1014","\u1019\u1014\u1010","\u1019\u1014\u1014","\u1019\u1015\u1010","\u1019\u1015\u1014","\u1019\u1016\u1010","\u1019\u1016\u1014","\u1019\u1018\u1014","\u1019\u1019\u1000","\u1019\u1019\u1010","\u1019\u1019\u1014","\u1019\u101a\u1010","\u1019\u101a\u1014","\u1019\u101b\u1010","\u1019\u101b\u1014","\u1019\u101c\u1010","\u1019\u101c\u1014","\u1019\u101f\u101b","\u1019\u1021\u1014","\u101b\u1000\u1005","\u101b\u1001\u1014","\u101b\u1004\u1014","\u101b\u1005\u1014","\u101b\u1005\u101b","\u101c\u1000\u1010","\u101c\u1000\u1014","\u101c\u1000\u101b","\u101c\u1001\u1010","\u101c\u1001\u1014","\u101c\u1014\u1014","\u101c\u101b\u1014","\u101c\u101c\u1014","\u101c\u101c\u101b","\u101c\u101e\u1014","\u101e\u1000\u1010","\u101e\u1014\u1014","\u101e\u1015\u1014","\u101f\u1015\u1010","\u101f\u1015\u1014","\u101f\u1015\u1019","\u1021\u1010\u1014","\u1025\u1000\u1019"]},{"state":"14","district":["\u1000\u1000\u1010","\u1000\u1000\u1011","\u1000\u1000\u1014","\u1000\u1000\u101c","\u1000\u1001\u1014","\u1000\u1010\u1001","\u1000\u1015\u1010","\u1000\u1015\u1014","\u1000\u1015\u101b","\u1000\u1016\u1014","\u1000\u1018\u101c","\u1000\u1019\u1014","\u1000\u1019\u101b","\u1000\u101c\u1014","\u1001\u101c\u1014","\u1002\u101e\u1010","\u1004\u1006\u1014","\u1004\u1015\u1010","\u1004\u101b\u1000","\u1004\u101e\u1001","\u1005\u1001\u1019","\u1005\u1014\u1016","\u1005\u1014\u1019","\u1006\u1000\u101c","\u1007\u101c\u1014","\u100a\u1010\u1014","\u100a\u1014\u1010","\u1010\u1000\u1014","\u1010\u1000\u101c","\u1010\u1001\u1019","\u1010\u1015\u1010","\u1010\u101c\u1010","\u1010\u101e\u1010","\u1011\u1000\u1000","\u1012\u1002\u1015","\u1012\u1002\u1019","\u1012\u1012\u101b","\u1012\u1014\u1016","\u1013\u1014\u1016","\u1015\u1005\u101c","\u1015\u1010\u1010","\u1015\u1010\u1014","\u1015\u1010\u1015","\u1015\u1016\u1014","\u1015\u1016\u1019","\u1015\u1019\u1014","\u1015\u101e\u1014","\u1015\u101e\u101a","\u1015\u101e\u101b","\u1016\u1015\u1014","\u1016\u1019\u1014","\u1017\u1000\u101c","\u1017\u1010\u1011","\u1017\u101e\u1014","\u1018\u1000\u101c","\u1018\u1010\u101c","\u1019\u1000\u1019","\u1019\u1000\u101c","\u1019\u1002\u1015","\u1019\u1006\u1014","\u1019\u1010\u1014","\u1019\u1014\u1019","\u1019\u1015\u1000","\u1019\u1015\u1014","\u1019\u1018\u1014","\u1019\u1019\u1000","\u1019\u1019\u1000","\u1019\u1019\u1000","\u1019\u1019\u1010","\u1019\u1019\u1014","\u1019\u101c\u1019","\u1019\u101e\u1014","\u1019\u1021\u1014","\u1019\u1021\u1015","\u1019\u1021\u1016","\u1019\u1021\u1019","\u101b\u1000\u1014","\u101b\u101e\u101a","\u101c\u1015\u1010","\u101c\u1015\u1014","\u101c\u1019\u1010","\u101c\u1019\u1014","\u101d\u1001\u1019","\u101d\u1010\u1014","\u101e\u1000\u1010","\u101e\u1001\u1019","\u101e\u1015\u1014","\u101e\u1019\u1014","\u101f\u1000\u1000","\u101f\u101e\u1010","\u101f\u101e\u1014","\u1021\u1001\u1019","\u1021\u1002\u1012","\u1021\u1002\u1015","\u1021\u1019\u1010","\u1021\u1019\u1014"]}];
