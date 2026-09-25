/* =========================================================
   THE EVOLUTION OF NURSING
========================================================= */

const timelineItems = [

    {
        id: "daughters-charity",
        year: "1633",
        title: "Daughters of Charity Established",
        type: "event",
        interactive: true,
        side: "above",
        lane: 3,
        position: 27,

        description: `
            <p>
                Saint Vincent de Paul founded the Daughters of Charity.
            </p>

            <p>
                This marked the turning point of nursing caree towards more female nurses.
            </p>

            <p>
                Up to this point nursing was largely dominated by male religious groups.
                Many of these groups formed and practiced during the crusades.
            </p>
        `,

        image: "images/daughters-of-charity.jpg"
    },


    {
        id: "dorothea-dix",
        year: "Apr. 4, 1802",
        title: "Dorothea Dix is Born",
        type: "person",
        interactive: true,
        side: "below",
        lane: 4,
        position: 43.8,

        description: `
            <p>
                Dix was an advocate for the mentally ill and ultimately helped to establish
                the first mental institutions.
            </p>

            <p>
                Dix was appointed Superintendent of the Female Nurses of the Union Army in 1861,
                during the war she treated soldiers from both sides of the Civil War conflict
                and advocated for the education and opportunity of female nurses.
            </p>

            <p>
                She stepped down from her position in 1865.
                After stepping down she continued to advocate for the mentally ill.
            </p>
        `,

        image: "images/dorothea-dix.jpg"
    },


    {
        id: "florence-nightingale",
        year: "May 12, 1820",
        title: "Florence Nightingale is Born",
        type: "person",
        interactive: true,
        side: "above",
        lane: 4,
        position: 46.5,

        description: `
            <p>
                Known as the “Mother of Modern Nursing, her focus on cleanliness,
                sanitization, education, and evidence-based practice, revolutionized
                the nursing profession.
            </p>

            <p>
                She served in the Crimean War from 1853-1856 as a nurse,
                which laid the foundation for the impact she would have on modern nursing.
            </p>

            <p>
                When she returned from War, she focused on training the next generation
                of nurses. Her manual, <em>Notes on Nursing</em> was one of the first nursing manuals ever published.
            </p>

            <p>
                The Florence Nightingale School of nursing, opened in 1860, was the first institution
                focused on training people to become nurses.
            </p>
        `,

        image: "images/florence-nightingale.jpg"
    },


    {
        id: "clara-barton",
        year: "Dec. 25, 1821",
        title: "Clara Barton is Born",
        type: "person",
        interactive: true,
        side: "below",
        lane: 2,
        position: 48.5,

        description: `
            <p>
                Barton was a Nurse during the civil war and would later go on to advocate
                for the signing of the Geneva Convention of 1864 which would grant protections
                to nurses involved in war zones.
            </p>

            <p>
                She helped to found the American Red Cross in 1881.
            </p>
        `,

        image: "images/clara-barton.jpg"
    },


    {
        id: "dix-mental-health",
        year: "1841",
        title: "Mental Health Reform",
        type: "event",
        interactive: true,
        side: "above",
        lane: 2,
        position: 50.8,

        description: `
            <p>
                Dorothea Dix advocated for the mentally ill.
            </p>

            <p>
                This would lead to the establishment of mental institutions.
            </p>
        `,

        image: "images/dix-mental-health.jpg"
    },


    {
        id: "mary-mahoney",
        year: "May 7, 1845",
        title: "Mary Eliza Mahoney is Born",
        type: "person",
        interactive: true,
        side: "below",
        lane: 4,
        position: 53.2,

        description: `
            <p>
                The first African-American trained nurse.
            </p>

            <p>
                Mahoney graduated from the New England Hospital School of Nursing in 1879.
            </p>

            <p>
                Her graduation was a major milestone for not only nursing but racial equality.
            </p>
        `,

        image: "images/mary-mahoney.jpg"
    },


    {
        id: "crimean-war",
        year: "1853–1856",
        title: "Crimean War",
        type: "event",
        interactive: true,
        side: "above",
        lane: 3,
        position: 56.5,

        description: `
            <p>
                Florence Nightingale Served in the Crimean War.
            </p>

            <p>
                Nightingale led a team of nurses, caring for wounded soldiers
                and addressing the poor conditions in hospitals.
            </p>

            <p>
                Nightingale’s implementation of sanitary and hygienic practices
                revolutionized nursing and drastically reduced infection.
            </p>

            <p>
                She advanced the field of epidemiology by drawing correlations
                to sanitary practices and the rates of dysentery and cholera.
            </p>
        `,

        image: "images/crimean-war.jpg"
    },


    {
        id: "notes-on-nursing",
        year: "1859",
        title: "Notes on Nursing Published",
        type: "event",
        interactive: false,
        side: "below",
        lane: 2,
        position: 59.5
    },


    {
        id: "nightingale-school",
        year: "1860",
        title: "Nightingale Training School Opens",
        type: "event",
        interactive: true,
        side: "above",
        lane: 2,
        position: 62.5,

        description: `
            <p>
                The Nightingale Training School for Nurses opens at St Thomas’ Hospital.
            </p>

            <p>
                Nightingale reinforced the importance of training and education for nurses.
            </p>

            <p>
                The school helped to legitimize nursing as a respected profession for nurses.
            </p>

            <p>
                The establishment of standards and ethics marked the shift from varying quality
                of early nurses to a skilled profession of trained nurses.
            </p>
        `,

        image: "images/nightingale-school.jpg"
    },


    {
        id: "civil-war",
        year: "1861–1865",
        title: "Civil War",
        type: "event",
        interactive: true,
        side: "below",
        lane: 3,
        position: 65.5,

        description: `
            <p>
                Nurse’s serve in the Civil War.
            </p>

            <p>
                Dorothea Dix was appointed Superintendent of Army Nurses for the Union Army. 
                She treated soldiers on both sides of the conflict.
            </p>

            <p>
                Over 2,000 Nurses cared for injured soldiers.
                Clara Barton served among them.
            </p>
        `,

        image: "images/civil-war-nursing.jpg"
    },


    {
        id: "lillian-wald",
        year: "Mar. 10, 1867",
        title: "Lillian Wald is Born",
        type: "person",
        interactive: true,
        side: "above",
        lane: 4,
        position: 67.5,

        description: `
            <p>
                Wald focused on public health nursing, founding the Henry Street
                Settlement House in New York City, which
                would spur the growth and development of public health nursing.
            </p>
        `,

        image: "images/lillian-wald.jpg"
    },


    {
        id: "first-training-school",
        year: "1872",
        title: "First U.S. Training School Opens",
        type: "event",
        interactive: true,
        side: "above",
        lane: 3,
        position: 73.2,

        description: `
            <p>
                The First Nurse Training School in the U.S.
                was opened at the New England Hospital for Women and Children
                in Boston.
            </p>

            <p>
                Linda Richards Graduated in 1873 becoming America’s first formally
                trained nurse.
            </p>

            <p>
                Many early nurse training schools in the U.S. were considered to be free
                labor for the hospitals and eventually nurse training would move away from
                hospitals and towards academic institutions.
            </p>
        `,

        image: "images/new-england-hospital.jpg"
    },


    {
        id: "mahoney-graduates",
        year: "1879",
        title: "Mahoney Graduates",
        type: "event",
        interactive: true,
        side: "below",
        lane: 2,
        position: 75.5,

        description: `
            <p>
                Mary Eliza Mahoney Graduates from the New England Hospital School of Nurses.
            </p>

            <p>
                She was the first formally trained African-American Nurse.
            </p>

            <p>
                Prior to her attendance, racial prejudices largely barred African-Americans
                from attending Hospital Schools.
            </p>

            <p>
                Her graduation was a milestone for both nursing and racial equality.
            </p>
        `,

        image: "images/mahoney-graduation.jpg"
    },


    {
        id: "american-red-cross",
        year: "1881",
        title: "American Red Cross Founded",
        type: "event",
        interactive: true,
        side: "above",
        lane: 2,
        position: 78.5,

        description: `
            <p>
                Clara Barton Established the American Red Cross.
            </p>
        `,

        image: "images/american-red-cross.jpg"
    },


    {
        id: "henry-street",
        year: "1883",
        title: "Henry Street Settlement Established",
        type: "event",
        interactive: true,
        side: "below",
        lane: 3,
        position: 81.2,

        description: `
            <p>
                Lillian Wald founds the Henry Street Settlement House.
                which provided nursing to poor residents of New York.
            </p>

            <p>
                The facility spurred the growth of public health nursing.
            </p>
        `,

        image: "images/henry-street.jpg"
    },


    {
        id: "ana",
        year: "1897",
        title: "American Nurses Association Founded",
        type: "event",
        interactive: false,
        side: "above",
        lane: 3,
        position: 85.5
    },


    {
        id: "wwi",
        year: "1914–1918",
        title: "Nurses Serve in WWI",
        type: "event",
        interactive: true,
        side: "below",
        lane: 4,
        position: 88.5,

        description: `
            <p>
                The military stated that all nurses must be female.
            </p>

            <p>
                There was a massive demand for nurses and 21,480 females
                served as nurses in the war.
            </p>
        `,

        image: "images/wwi-nurses.jpg"
    },


    {
        id: "nursing-evolves",
        year: "1930s–1950s",
        title: "Nursing Evolves",
        type: "event",
        interactive: true,
        side: "below",
        lane: 2,
        position: 93,

        description: `
            <p>
                The nursing field grew to include several different specialties;
                nurses were expanding to all areas of medicine.
            </p>

            <p>
                The establishment of ICUs led to the creation of critical care nurses.
            </p>

            <p>
                Veteran nurses were underpaid, leading to severe nursing shortages.
            </p>
        `,

        image: "images/nursing-1930s-1950s.jpg"
    },


    {
        id: "wwii",
        year: "1939–1945",
        title: "Nurses Serve in WWII",
        type: "event",
        interactive: true,
        side: "above",
        lane: 2,
        position: 93,

        description: `
            <p>
                Over 78,000 American Nurses Serve in WWII.
            </p>
        `,

        image: "images/wwii-nurses.jpg"
    },


    {
        id: "doctoral-program",
        year: "1979",
        title: "First Nursing Doctoral Program",
        type: "event",
        interactive: false,
        side: "above",
        lane: 4,
        position: 97.5
    },


    {
        id: "scrubs",
        year: "1990s",
        title: "Scrubs Become Standard",
        type: "event",
        interactive: false,
        side: "below",
        lane: 3,
        position: 99.0
    }

];


/* =========================================================
   REFERENCES — ALPHABETICAL
========================================================= */

const projectReferences = `

    <h2>References</h2>

    <p>
        Bowen, C., Draper, L., & Moore, H. (2024).
        <em>Fundamentals of nursing</em>.
        OpenStax.
    </p>

    <p>
        Held, L. (2018).
        <em>Important dates in the history of nursing</em>.
        https://www.aahn.org/important-dates-in-the-history-of-nursing
    </p>

    <p>
        History of Nursing - Nursing Theory. (2019, September 18).
        <em>Nursing Theory</em>.
        https://nursingtheory.org/articles/The-History-of-Nursing
    </p>

    <p>
        National Women’s History Museum. (2018, March 7).
        <em>Timeline: The History of Nursing</em>.
        https://www.womenshistory.org/exhibits/timeline-history-nursing
    </p>
`;


/* =========================================================
   WEBSITE ENGINE
========================================================= */

const timelineContainer =
    document.getElementById("timeline-items");


timelineItems.forEach(item => {
    createTimelineItem(item);
});


function createTimelineItem(item) {

    const timelineItem =
        document.createElement("div");

    timelineItem.classList.add(
        "timeline-item",
        item.side,
        `lane-${item.lane}`,
        item.type,
        item.interactive ? "interactive" : "static"
    );

    timelineItem.style.left =
        `${item.position}%`;


    if (item.side === "above") {
        timelineItem.style.transform =
            "translate(-50%, -100%)";
    }


    const stem =
        document.createElement("div");

    stem.className =
        "item-stem";


    let node;

    if (item.interactive) {

        node =
            document.createElement("button");

        node.setAttribute(
            "aria-label",
            `Learn more about ${item.title}`
        );

        node.addEventListener(
            "click",
            () => openModal(item)
        );

    } else {

        node =
            document.createElement("div");
    }

    node.className =
        "item-node";


    const label =
        document.createElement("div");

    label.className =
        "item-label";


    const year =
        document.createElement("span");

    year.className =
        "item-year";

    year.textContent =
        item.year;


    const title =
        document.createElement("span");

    title.className =
        "item-title";

    title.textContent =
        item.title;


    label.appendChild(year);
    label.appendChild(title);

    timelineItem.appendChild(label);
    timelineItem.appendChild(node);
    timelineItem.appendChild(stem);

    timelineContainer.appendChild(
        timelineItem
    );
}


/* =========================================================
   MODAL
========================================================= */

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modal-title");

const modalDate =
    document.getElementById("modal-date");

const modalType =
    document.getElementById("modal-type");

const modalDescription =
    document.getElementById("modal-description");

const modalImage =
    document.getElementById("modal-image");

const modalImageContainer =
    document.getElementById(
        "modal-image-container"
    );


function openModal(item) {

    modalTitle.textContent =
        item.title;

    modalDate.textContent =
        item.year;


    if (item.type === "person") {

        modalType.textContent =
            "Biography";

    } else {

        modalType.textContent =
            "Historical Event";
    }


    modalDescription.innerHTML =
        item.description || "";


    if (item.image) {

        modalImage.src =
            item.image;

        modalImage.alt =
            item.title;

        modalImageContainer.style.display =
            "block";

        modalImage.onerror =
            function () {
                modalImageContainer.style.display =
                    "none";
            };

    } else {

        modalImageContainer.style.display =
            "none";
    }


    modal.classList.add("open");

    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    modal.classList.remove("open");

    document.body.style.overflow =
        "";
}


document
    .getElementById("modal-close")
    .addEventListener(
        "click",
        closeModal
    );


document
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        closeModal
    );


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeModal();
        }

    }
);


/* =========================================================
   REFERENCES
========================================================= */

const referencesButton =
    document.getElementById(
        "references-button"
    );

const referencesContent =
    document.getElementById(
        "references-content"
    );


referencesContent.innerHTML =
    projectReferences;


referencesButton.addEventListener(
    "click",
    () => {

        referencesContent
            .classList
            .toggle("open");

    }
);