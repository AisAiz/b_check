
boites_input = document.getElementById("boites_input");
btn_extract = document.getElementById("btn_extract");

boites_output = document.getElementById("boites_output");
extract_profiles_offer = document.getElementById("extract_profiles_offer");
extract_profiles_reply = document.getElementById("extract_profiles_reply");

copy_offer = document.getElementById("copy_offer");
copy_reply = document.getElementById("copy_reply");
copy_boite = document.getElementById("copy_boite");

btn_extract.addEventListener("click", () => {
    if (boites_input.value != "") {
        var email_list = [];
        email_list = boites_input.value.split(/\r?\n/);

        //boites_output.value = email_list;
        //alert(email_list.length);
        //alert(Array.isArray(email_list));

        var a = [];



        for (let i = 0; i < email_list.length; i++) {
            //alert(typeof(email_list[i]));
            var line = [];
            
                line = email_list[i].toString().split("\t");
            
            //alert(typeof(line));
            //alert(line[1]);
            //line.push(email_list[i][0].toString() + "," + email_list[i][1] + "," + email_list[i][2] + "," + email_list[i][3] );

            if (line[3] != "" && line[2] != "" && line[3] != undefined && line[2] != undefined && line[3] != null && line[2] != null) {
                try {
                var profile = line[1];
                var email = line[2];
            } catch (error) {
                alert(error);
            }
                a.push([profile, email]);
            }

        }

        //alert(typeof(a))
        //a.sort(sortFunction);

        var output = "";
        //alert(a.length)
        //alert(a[0])

        for (let i = 0; i < a.length; i++) {
            output += a[i][0] + " \t" + a[i][1] + "\n";
        }

        boites_output.value = output;
        function sortFunction(a, b) {
            if (a[0] === b[0]) {
                return 0;
            }
            else {
                return (a[0] < b[0]) ? -1 : 1;
            }
        }

        var profiles_offer = "";
        var profiles_reply = "";
        if (a.length > 32) {
            for (let i = 0; i < 32; i++) {

                profiles_offer += a[i][0] + "\n";
            }
            for (let i = 0; i < 50; i++) {
                profiles_reply += a[i][0] + "\n";
            }
        }
        else {
            for (let i = 0; i < a.length; i++) {

                profiles_offer += a[i][0] + "\n";
            }
            for (let i = 0; i < a.length; i++) {
                profiles_reply += a[i][0] + "\n";
            }
        }

        extract_profiles_offer.value = profiles_offer;
        extract_profiles_reply.value = profiles_reply;
    }

})

copy_offer.addEventListener("click", () => {
    // Select the text field
    extract_profiles_offer.select();
    extract_profiles_offer.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(extract_profiles_offer.value);

    // Alert the copied text
    //alert("Copied the text: " + extract_profiles_offer.value);
})

copy_reply.addEventListener("click", () => {
    // Select the text field
    extract_profiles_reply.select();
    extract_profiles_reply.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(extract_profiles_reply.value);

    // Alert the copied text
    //alert("Copied the text: " + extract_profiles_reply.value);
})


copy_boite.addEventListener("click", () => {
    // Select the text field
    boites_output.select();
    boites_output.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(boites_output.value);

    // Alert the copied text
    //alert("Copied the text: " + boites_output.value);
})
