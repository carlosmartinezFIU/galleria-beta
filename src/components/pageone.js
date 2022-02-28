export function leftPanel(imageSource, upperDescription, lowerDescription, thumbLogo){
    const leftPanelWrapper = document.createElement("div");
    leftPanelWrapper.classList.add("left_panel_wrapper");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image_container");
    imageContainer.id = "image_container";

    let image = document.createElement("img");
    image.src = imageSource;
    imageContainer.append(image);


    const contentContainer = document.createElement("div");
    contentContainer.classList.add("left_content_container");
    contentContainer.id = "left_content_container";
    contentContainer.classList.add("left_container_forty");

    let upperText = document.createElement("p");
    upperText.classList.add("left_upper_text");
    upperText.id = "left_upper_text";
    upperText.innerText  = upperDescription;
    let lowerText = document.createElement("p");
    lowerText.classList.add("left_lower_text");
    lowerText.id = "left_lower_text";
    lowerText.innerText = lowerDescription;


    contentContainer.append(upperText, lowerText);




    const thumbContainer = document.createElement("div");
    thumbContainer.classList.add("left_thumb_container");
    thumbContainer.id = "left_thumb_container";
    thumbContainer.classList.add("left_thumb_forty");

    let thumbImage = document.createElement("img");
    thumbImage.src = thumbLogo;

    thumbContainer.append(thumbImage);

    leftPanelWrapper.append(imageContainer, contentContainer, thumbContainer);

    return leftPanelWrapper;

}

export function rightPanel(rightDescription, dateDescription){
    const rightPanelWrapper = document.createElement("div");
    rightPanelWrapper.classList.add("right_panel_wrapper");


    const dateContainer = document.createElement("div");
    dateContainer.classList.add("date_container");

    let date = document.createElement("p");
    date.innerText = dateDescription;
    date.classList.add("date_content");
    date.id = "date_content";
    dateContainer.append(date);


    const rightContentContainer = document.createElement("div");
    rightContentContainer.classList.add("right_content_container");

    let rightContent = document.createElement("p");
    rightContent.innerText = rightDescription;
    rightContent.classList.add("right_content_description");
    rightContent.id = "right_content_description";


    rightContentContainer.append(rightContent);

    rightPanelWrapper.append(dateContainer, rightContentContainer);

    return rightPanelWrapper;

}

