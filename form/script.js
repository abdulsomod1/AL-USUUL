const form = document.getElementById('usuul');
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        var formData = new FormData(form);
        var ex = document.getElementById("ex").checked;
        var age = document.getElementById("age").checked;

        if (age) {
          formData.append("age", "Yes");
        } else {
          formData.append("age", "No");
        }
        if (ex) {
          formData.append("ex", "Yes");
        } else {
          formData.append("ex", "No");
        }

        fetch(scriptURL, { method: "POST", body: formData })
          .then((response) => {
            swal("Done", "Submitted Successfully.", "success");
          })
          .catch((error) => {
            swal("Error", "Something went wrong. please try again!", "error");
          });
      });