function showMessage() {
    alert(
        "Welcome to CloudTech! Explore IaaS, PaaS and SaaS cloud services."
    );
}

function learnMore(service) {

    let message = "";

    if (service === "IaaS") {
        message =
            "IaaS provides virtual machines, storage, networks and other computing infrastructure.";
    }

    else if (service === "PaaS") {
        message =
            "PaaS provides developers with tools and platforms to build and deploy applications.";
    }

    else if (service === "SaaS") {
        message =
            "SaaS provides ready-to-use software applications through the Internet.";
    }

    alert(message);
}