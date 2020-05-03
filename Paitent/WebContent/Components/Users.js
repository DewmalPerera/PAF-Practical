$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});
// SAVE ============================================
//$(document).on("click", "#btnSave", function(event) {
//	// Clear alerts---------------------
//	$("#alertSuccess").text("");
//	$("#alertSuccess").hide();
//	$("#alertError").text("");
//	$("#alertError").hide();
//	// Form validation-------------------
//	var status = validateItemForm();
//	if (status != true) {
//		$("#alertError").text(status);
//		$("#alertError").show();
//		return;
//	}
//	// If valid------------------------
//	$("#formUser").submit();
//});

//SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	// Form validation-------------------
	var status = validateItemForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	// If valid------------------------
	var type = ($("#hidUserIDSave").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "User_API",
		type : type,
		data : $("#formUser").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onUserSaveComplete(response.responseText, status);
		}
	});	
});

function onUserSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divUsersGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidUserIDSave").val("");
	$("#formUser")[0].reset();
}

//DELETE=============================================================================
$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		url : "User_API",
		type : "DELETE",
		data : "User_ID=" + $(this).data("userid"),
		dataType : "text",
		complete : function(response, status) {
			onUserDeleteComplete(response.responseText, status);
		}
	});
});


function onUserDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divUsersGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}


// UPDATE==========================================
$(document).on(
		"click",
		".btnUpdate",
		function(event) {
			$("#hidUserIDSave").val(
					$(this).closest("tr").find('#hidUserIDUpdate').val());
			$("#User_Name").val($(this).closest("tr").find('td:eq(1)').text());
			$("#U_NIC").val($(this).closest("tr").find('td:eq(2)').text());
			$("#U_Age").val($(this).closest("tr").find('td:eq(3)').text());
			$("#U_Contact_Number").val($(this).closest("tr").find('td:eq(4)').text());
			$("#U_Email").val($(this).closest("tr").find('td:eq(5)').text());
			$("#U_Address").val($(this).closest("tr").find('td:eq(6)').text());
		});




// CLIENTMODEL=========================================================================
function validateItemForm() {
	// USERNAME
	if ($("#User_Name").val().trim() == "") {
		return "Insert Username.";
	}
	//NIC
	if ($("#U_NIC").val().trim() == "") {
		return "Insert NIC.";
	}
	// AGE-------------------------------
	if ($("#U_Age").val().trim() == "") {
		return "Insert Age.";
	}
	// is numerical value
	var tmpAge = $("#U_Age").val().trim();
	if (!$.isNumeric(tmpAge)) {
		return "Insert a numerical value for Age.";
	}
	// PHONENO
	if ($("#U_Contact_Number").val().trim() == "") {
		return "Insert Contact Number.";
	}
	// is numerical value
	var tmpPhone = $("#U_Contact_Number").val().trim();
	if (!$.isNumeric(tmpPhone)) {
		return "Insert Only Numbers for Contact Number";
	}
	// EMAIL------------------------
	if ($("#U_Email").val().trim() == "") {
		return "Insert Email.";
	}
	
	// ADDRESS------------------------
	if ($("#U_Address").val().trim() == "") {
		return "Insert Address.";
	}
	
	return true;
}
