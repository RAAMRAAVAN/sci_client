export const HomeContent = {
  "_id": "67d5201b92ae82369ef8f29d",
  "id": 1,
  "heading": "South Asia's Largest Cancer Care Networks",
  "description": "Assam Cancer Care Foundation is a joint partnership between the Government of Assam and the Tata Trusts. It was set up in December 2017 to create a first-of-its-kind, three-level cancer grid in the state of Assam. The distributed care model was conceptualized by the Trusts and the Government of Assam to create patient-centric cancer institutions to deliver standardized and affordable care closer to patients' homes. With a plan to set up 17 cancer hospitals in the state, it is the largest cancer care network in South Asia. Of the 17 hospitals, Hon’ble Prime Minister Shri Narendra Modi inaugurated seven centres at Dibrugarh, Barpeta, Tezpur, Lakhimpur, Jorhat, Kokrajhar, and Darrang; and laid the foundation stone for seven new hospitals at Nagaon, Goalpara, Nalbari, Golaghat, Tinsukia, Sivasagar, and Dhubri on April 28, 2022. Construction work for the Diphu centres is currently in progress. In March 2024, the Guwahati and Silchar centres were successfully inaugurated.",
  "HospitalID": 1,
  "updatedAt": "2025-03-18T08:51:38.302Z"
}



export const ImageSliderData = [
  {
    "_id": "67de3609ca53e0286fde64f8",
    "id": 1,
    "HospitalID": 1,
    "name": "Slider Image 1",
    "path": "/SCI/slider/1.jpg",
    "active": "Y"
  },
  {
    "_id": "67de3609ca53e0286fde64f6",
    "id": 2,
    "HospitalID": 1,
    "name": "Slider Image 2",
    "path": "/SCI/slider/2.jpg",
    "active": "Y"
  },
  // {
  //     "_id": "67de3609ca53e0286fde64f9",
  //     "id": 3,
  //     "HospitalID": 1,
  //     "name": "Slider Image 3",
  //     "path": "/SCI/slider/3.jpg",
  //     "active": "Y"
  // },
  {
    "_id": "67de3609ca53e0286fde64fa",
    "id": 4,
    "HospitalID": 1,
    "name": "Slider Image 4",
    "path": "/SCI/slider/4.jpg",
    "active": "Y"
  },
  {
    "_id": "67de3609ca53e0286fde64fb",
    "id": 5,
    "HospitalID": 1,
    "name": "Slider Image 5",
    "path": "/SCI/slider/5.jpg",
    "active": "Y"
  },
  {
    "_id": "67de3609ca53e0286fde64f7",
    "id": 6,
    "HospitalID": 1,
    "name": "Slider Image 6",
    "path": "/SCI/slider/6.jpg",
    "active": "Y"
  }
  ,
  {
    "_id": "67de3609ca53e0286fde64f5",
    "id": 7,
    "HospitalID": 1,
    "name": "Slider Image 7",
    "path": "/SCI/slider/7.jpg",
    "active": "Y"
  },
  // {
  //     "_id": "67de3609ca53e0286fde64f5",
  //     "id": 8,
  //     "HospitalID": 1,
  //     "name": "Slider Image 8",
  //     "path": "/SCI/slider/8.jpg",
  //     "active": "Y"
  // },
  {
    "_id": "67de3609ca53e0286fde64f5",
    "id": 9,
    "HospitalID": 1,
    "name": "Slider Image 9",
    "path": "/SCI/slider/9.jpg",
    "active": "Y"
  }
]

// ✅ Fetch Doctors
export async function fetchDoctors2(payload = { ccode: "SCI" }) {
  // ⚠️ Bypass SSL check (only for local development)
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://barpetacancercentre.org/api/get-doctor-for-center`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ccode: "SCI " }),
      next: { revalidate: 900 },
      // cache: "no-store",
    });

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

// ✅ Fetch Accomplishments
export async function fetchAccomplishments2() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://barpetacancercentre.org/api/get-counts-for-center`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ccode: "SCI " }),
      next: { revalidate: 10 },
      // cache: "no-store",
    });

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

export const FetchFacilitiesData = [
  {
    "_id": "67edf9f274c62b1f3d0231c61",
    "id": 30,
    "HospitalID": 1,
    "title": "PET-CT and Medical Cyclotron",
    "short_description": "The medical Cyclotron Machine can produce the radio-active substance (FDG) required for PET-CT investigation. This Medical Cyclotron Facility is the only one of its kinds installed in Eastern India in Government set-up.\n\nDual Head Gama Camera has been procured and installed for clinical use.",
    "long_description": "The medical Cyclotron Machine can produce the radio-active substance (FDG) required for PET-CT investigation. This Medical Cyclotron Facility is the only one of its kinds installed in Eastern India in Government set-up.\n\n Dual Head Gama Camera has been procured and installed for clinical use.\n\n PET CT imagining is available since August 16. With commissioning of Medical Cyclotron facility, the radio pharmaceutical will be available on site and more number of patients can be taken up for PET CT with no waiting period",
    "read_more": true,
    "read_more2": false,
    "description": "The medical Cyclotron Machine can produce the radio-active substance (FDG) required for PET-CT investigation. This Medical Cyclotron Facility is the only one of its kinds installed in Eastern India in Government set-up.\n\n Dual Head Gama Camera has been procured and installed for clinical use.\n\n PET CT imagining is available since August 16. With commissioning of Medical Cyclotron facility, the radio pharmaceutical will be available on site and more number of patients can be taken up for PET CT with no waiting period",
    "path": "SCI/Facilities/1.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae5",
    "color2": "#ced0d2",
    "order": 1
  },
  {
    "_id": "67edf9f274c62b1f3d0231c72",
    "id": 31,
    "HospitalID": 1,
    "title": "Bone Marrow Transplant",
    "short_description": "Bone marrow transplantation, also known as stem cell transplantation, is an advanced treatment done in a few special hospitals. In this procedure, healthy stem cells are taken from one person (called the donor) and given to the patient (called the recipient).",
    "long_description": "Bone marrow transplantation, also known as stem cell transplantation, is an advanced treatment done in a few special hospitals. In this procedure, healthy stem cells are taken from one person (called the donor) and given to the patient (called the recipient).\n\nEarlier, these stem cells were taken from inside the bone, but now they are mostly collected from the donor’s blood through a vein, which is easier. These stem cells go to the patient’s bone marrow and help make new blood cells.",
    "read_more": true,
    "read_more2": true,
    "description": "Bone marrow transplantation, also known as stem cell transplantation, is an advanced treatment done in a few special hospitals. In this procedure, healthy stem cells are taken from one person (called the donor) and given to the patient (called the recipient).\n\nEarlier, these stem cells were taken from inside the bone, but now they are mostly collected from the donor’s blood through a vein, which is easier. These stem cells go to the patient’s bone marrow and help make new blood cells.\n\nDepending on who the stem cells are taken from, there are two types of BMT. In autologous BMT, the stem cells are taken from the patient’s own body. In allogenic BMT, the stem cells come from someone else — usually a family member like a brother, sister, or parent, or sometimes an unrelated person.\n\nAllogenic BMT can be of three types: from a matching sibling (called MSD), from a half-matched family member (called Haplo BMT), or from an unrelated matching person (called MUD). Haplo BMT and MUD BMT are more difficult than MSD BMT.\n\nBMT can cure several serious blood diseases like aplastic anemia, acute leukemia, multiple myeloma, and relapsed lymphoma.\n\nBMT is one of the most complex treatments in medicine. It requires a skilled team including doctors, nurses, lab experts, dieticians, and ICU staff. It is available only in selected hospitals in India, and many patients from Assam have to go outside the state for this treatment. \n\nAvailability of BMT in State Cancer Institute will be a definitive moment in the landscape of cancer care in Assam- patients will be able to get quality care at an affordable price.",
    "path": "SCI/Facilities/2.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae42",
    "color2": "#ced0d28",
    "order": 2
  },
  {
    "_id": "67edf9f274c62b1f3d0231c83",
    "id": 32,
    "HospitalID": 1,
    "title": "PET-MRI",
    "short_description": "It is the fourth machine of its kind in India. PET-MRI is a hybrid imagining with advantages of both PET and MRI in a single machine. \n\nThis is also a great Diagnostic cum Research tool. First of its kind in entire Northeast India and in a government setup hospital for treatment, diagnostic and research purpose.",
    "long_description": "It is the fourth machine of its kind in India. PET-MRI is a hybrid imagining with advantages of both PET and MRI in a single machine. \n\nThis is also a great Diagnostic cum Research tool. First of its kind in entire Northeast India and in a government setup hospital for treatment, diagnostic and research purpose.",
    "read_more2": false,
    "read_more": false,
    "description": "It is the fourth machine of its kind in India. PET-MRI is a hybrid imagining with advantages of both PET and MRI in a single machine. \n\nThis is also a great Diagnostic cum Research tool. First of its kind in entire Northeast India and in a government setup hospital for treatment, diagnostic and research purpose.",
    "path": "SCI/Facilities/new-pet-mri.jpeg",
    "Loader": "#0076bd",
    "color1": "#cbdae54",
    "color2": "#ced0d39",
    "order": 3
  },
  {
    "_id": "67edf9f274c62b1f3d0231c94",
    "id": 33,
    "HospitalID": 1,
    "title": "Molecular Oncology",
    "short_description": "The institute is equipped with a state-of-the-art Molecular Oncology investigation facility, combining cutting-edge technology with medical expertise to revolutionize cancer diagnostics and treatment. The facility offers a comprehensive suite of technologies to unravel Molecular cancer mysteries.",
    "long_description": "The institute is equipped with a state-of-the-art Molecular Oncology investigation facility, combining cutting-edge technology with medical expertise to revolutionize cancer diagnostics and treatment. The facility offers a comprehensive suite of technologies to unravel Molecular cancer mysteries.\n\nThe targeted investigations offer a comprehensive genetic profile, identifying key mutations and alterations for personalized treatment strategies. They empower healthcare professionals to identify cancer at its earliest stages, improving treatment options and patient outcomes.",
    "read_more2": true,
    "read_more": true,
    "description": "The institute is equipped with a state-of-the-art Molecular Oncology investigation facility, combining cutting-edge technology with medical expertise to revolutionize cancer diagnostics and treatment. The facility offers a comprehensive suite of technologies to unravel Molecular cancer mysteries.\n\nThe targeted investigations offer a comprehensive genetic profile, identifying key mutations and alterations for personalized treatment strategies. They empower healthcare professionals to identify cancer at its earliest stages, improving treatment options and patient outcomes.\n\nThe tests are affordable, reliable, and data-secure. The Molecular investigation uses Quantitative Real Time PCR techniques to test various cancer panels, including Lung, Colorectal, HPV, EBV, BRCA-1 and BRCA-2 mutations, IDH1 and IDH2 and MGMT promoter methylation, DPYD gene mutation detection, Thrombophilia panel mutation detection, and BCL1 and BCL2 determination. The Molecular Oncology Laboratory is updating for Next-Generation Sequencing, FISH, and karyotyping, and using more precise digital PCR techniques for personalized treatment strategies.",
    "path": "SCI/Facilities/mol-onc.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae5",
    "color2": "#ced0d51",
    "order": 4
  },
  {
    "_id": "67edf9f274c62b1f3d0231ca5",
    "id": 34,
    "HospitalID": 1,
    "title": "Radiation Oncology",
    "short_description": "The institute is equipped with two high end linear Accelerator machines, Electa Synergy and Varian TruBeam, capable of carrying out state-of-the-art treatments like IMRT, IGRT, V-MAT, SRS, SBRT with CT simulator and computerized treatment planning system (TPS).",
    "long_description": "The institute is equipped with two high end linear Accelerator machines, Electa Synergy and Varian TruBeam, capable of carrying out state-of-the-art treatments like IMRT, IGRT, V-MAT, SRS, SBRT with CT simulator and computerized treatment planning system (TPS).\n\nOne Cobalt Teletherapy and a High Dose Rate (HDR) Brachytherapy unit are available for patient treatment. One conventional Simulator, indigenously manufactured \"Imagine\", was received as a grant from the Dept of Atomic Energy, GOI.\n\nHigh precision radiation treatment, a Radixact Tomotherapy unit was commissioner on 17th February 21.",
    "read_more2": true,
    "read_more": true,
    "description": "The institute is equipped with two high end linear Accelerator machines, Electa Synergy and Varian TruBeam, capable of carrying out state-of-the-art treatments like IMRT, IGRT, V-MAT, SRS, SBRT with CT simulator and computerized treatment planning system (TPS).\n\nOne Cobalt Teletherapy and a High Dose Rate (HDR) Brachytherapy unit are available for patient treatment. One conventional Simulator, indigenously manufactured \"Imagine\", was received as a grant from the Dept of Atomic Energy, GOI.\n\nHigh precision radiation treatment, a Radixact Tomotherapy unit was commissioner on 17th February 21.\n\nThis state-of-the-art cancer treatment facility is the only machine of its kind in the entire Northeast. With procurement of latest technology Quality Assurance (QA) equipment and four variant of treatment planning computers (TPS), State Cancer Institute has a well-equipped Radiation Oncology services comparable to any best establishment of our country.",
    "path": "SCI/Facilities/radiation-oncology.jpeg",
    "Loader": "#0076bd",
    "color1": "#cbdae42",
    "color2": "#ced0d2",
    "order": 5
  },
  {
    "_id": "67edf9f274c62b1f3d0231cb6",
    "id": 35,
    "HospitalID": 1,
    "title": "Robotic Surgery",
    "short_description": "Robotic surgery is a cutting-edge advancement in the field of minimally invasive surgery, offering enhanced precision, control, and dexterity. It utilizes robotic systems controlled by surgeons to perform complex procedures with high accuracy and allows surgeons to operate through tiny incisions using robotic arms equipped with surgical instruments and a high-definition 3D camera.",
    "long_description": "Robotic surgerAdvantages of Roboticy is a cutting-edge advancement in the field of minimally invasive surgery, offering enhanced precision, control, and dexterity. It utilizes robotic systems controlled by surgeons to perform complex procedures with high accuracy and allows surgeons to operate through tiny incisions using robotic arms equipped with surgical instruments and a high-definition 3D camera.\n\nRobotic surgery is particularly valuable in delicate procedures requiring fine movements, making it a preferred choice in fields like urology, gynecology, cardiothoracic surgery, and especially oncological (cancer) surgeries. However, while robotic surgery offers numerous benefits over traditional laparoscopic surgery, it also comes with certain limitations.",
    "read_more2": true,
    "read_more": true,
    "description": "Robotic surgery is a cutting-edge advancement in the field of minimally invasive surgery, offering enhanced precision, control, and dexterity. It utilizes robotic systems controlled by surgeons to perform complex procedures with high accuracy and allows surgeons to operate through tiny incisions using robotic arms equipped with surgical instruments and a high-definition 3D camera.\n\nRobotic surgery is particularly valuable in delicate procedures requiring fine movements, making it a preferred choice in fields like urology, gynecology, cardiothoracic surgery, and especially oncological (cancer) surgeries. However, while robotic surgery offers numerous benefits over traditional laparoscopic surgery, it also comes with certain limitations.\n\nAdvantages of Robotic Surgery Over Laparoscopic Surgery\n\nLaparoscopic surgery is a widely used minimally invasive technique that involves small incisions, a camera, and surgical instruments. While effective, it has limitations that robotic surgery helps overcome.\n\nRobotic surgery allows for a greater range of motion and finer control over surgical instruments than laparoscopy. The robotic arms can rotate 360 degrees, providing better maneuverability in confined spaces, which is particularly useful in complex oncological surgeries.\n\nThe 3D high-definition camera in robotic surgery provides a magnified, stereoscopic view of the surgical site. This is superior to the 2D imaging used in traditional laparoscopy, allowing for better depth perception and visualization of critical structures.\n\nUnlike laparoscopy, where surgeons have to work with long-handled instruments in sometimes uncomfortable positions, robotic surgery allows surgeons to operate while seated at a console. This reduces physical strain and enhances focus during long and complex surgeries.\n\nRobotic surgery eliminates hand tremors, ensuring extremely steady movements. This precision is particularly beneficial in nerve-sparing surgeries, such as prostatectomy, where preserving delicate nerve structures is crucial.\n\nRobotic systems offer ergonomic advantages, as the surgeon controls the instruments using a console rather than physically holding laparoscopic tools. This can lead to improved surgical outcomes and reduced surgeon fatigue.\n\nDue to its minimally invasive nature and precision, robotic surgery often results in less tissue trauma, reduced blood loss, fewer complications, and potentially a faster recovery time compared to conventional laparoscopy.\n\nDisadvantages of Robotic Surgery\n\nDespite its advantages, robotic surgery has some limitations.\n\nOne of the biggest drawbacks of robotic surgery is its high cost. The purchase, maintenance, and operation of robotic systems are expensive, making them less accessible in many hospitals, particularly in developing regions.\n\nRobotic surgery requires significant training and experience for surgeons to become proficient. Additionally, setting up the robotic system before a procedure takes longer compared to traditional laparoscopy.\n\nUnlike open surgery or laparoscopy, robotic surgery lacks direct haptic (tactile) feedback, which means the surgeon does not directly feel the tissues being operated on. While visual cues compensate for this, it remains a limitation.\n\nAs with any technology-dependent system, robotic surgery carries the risk of mechanical failures or software malfunctions during a procedure, which can lead to delays or complications.\n\nRobotic surgery is not available in all hospitals, especially in rural or underdeveloped areas, limiting patient access to this advanced technology.\n\nApplication of Robotic Surgery in Oncosurgical Procedures\n\nRobotic surgery has found widespread application in the field of oncology (cancer surgery), where precision and minimal invasiveness are critical.\n\nRobotic-assisted radical prostatectomy is one of the most common applications. It allows for nerve-sparing techniques, reducing the risk of incontinence and erectile dysfunction post-surgery.\n\nIn cases of uterine, cervical, and ovarian cancers, robotic-assisted hysterectomy provides better precision and reduces the risk of excessive bleeding compared to traditional approaches.\n\nFor colorectal cancers, robotic surgery allows for greater accuracy in dissection, reducing complications such as damage to surrounding nerves and improving bowel function preservation.\n\nRobotic thoracic surgery is used for lung cancer resections and esophagectomies, providing minimally invasive access to the chest cavity with superior visualization.\n\nTransoral robotic surgery (TORS) is used for cancers of the oropharynx, larynx, and base of the tongue, allowing for tumor removal without the need for large external incisions.\n\nFor renal and bladder cancers, robotic-assisted partial nephrectomy and radical cystectomy offer precise tumor removal while preserving healthy tissue and reducing postoperative complications.\n\nConclusion\n\nRobotic surgery represents a major advancement in minimally invasive surgery, offering significant advantages over traditional laparoscopic surgery, particularly in precision, visualization, and surgeon comfort. It has become a preferred technique in oncological surgeries, improving outcomes for cancer patients.\n\nHowever, challenges such as high cost, learning curve, and limited accessibility remain barriers to widespread adoption. As technology continues to evolve, further advancements in robotic systems may address these limitations, making robotic surgery more efficient, cost-effective, and accessible to a broader range of patients.\n\nRobotic surgery is undoubtedly a game-changer in modern surgical practice, particularly in cancer treatment, and is expected to play an even greater role in the future of surgery.",
    "path": "SCI/Facilities/6.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae54",
    "color2": "#ced0d28",
    "order": 6
  },
  {
    "_id": "67edf9f274c62b1f3d0231cc7",
    "id": 36,
    "HospitalID": 1,
    "title": "Hospital Based Cancer Registry",
    "short_description": "Hospital Based Cancer Registry (HBCR) systematically analyzes cancer data to generate reliable insights into disease patterns, survival trends, and treatment outcomes. It plays a crucial role in clinical research, evaluating treatment modalities, and supporting hospital facility planning.",
    "long_description": "Hospital Based Cancer Registry (HBCR) systematically analyzes cancer data to generate reliable insights into disease patterns, survival trends, and treatment outcomes. It plays a crucial role in clinical research, evaluating treatment modalities, and supporting hospital facility planning.\n\nAdditionally, the registry contributes to active patient follow-up, assesses survival length and quality based on cancer site, stage, and treatment, and tracks time trends in early versus late-stage diagnoses. HBCR also focuses on capacity building by recruiting and training professionals in cancer registration and epidemiology.",
    "read_more2": false,
    "read_more": true,
    "description": "Hospital Based Cancer Registry (HBCR) systematically analyzes cancer data to generate reliable insights into disease patterns, survival trends, and treatment outcomes. It plays a crucial role in clinical research, evaluating treatment modalities, and supporting hospital facility planning.\n\nAdditionally, the registry contributes to active patient follow-up, assesses survival length and quality based on cancer site, stage, and treatment, and tracks time trends in early versus late-stage diagnoses. HBCR also focuses on capacity building by recruiting and training professionals in cancer registration and epidemiology.",
    "path": "SCI/Facilities/7.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae5",
    "color2": "#ced0d39",
    "order": 7
  },
  {
    "_id": "67edf9f274c62b1f3d0231cd8",
    "id": 37,
    "HospitalID": 1,
    "title": "Radiology",
    "short_description": "The institute is equipped with high-end equipment in the Radiology Department like 128 Slice CT machine, 3 Tesla MRI Machine, 1.5 Tesla MRI Machine, DR X Ray System, CR X Ray System, Mammography.",
    "long_description": "The institute is equipped with high-end equipment in the Radiology Department like 128 Slice CT machine, 3 Tesla MRI Machine, 1.5 Tesla MRI Machine, DR X Ray System, CR X Ray System, Mammography.",
    "read_more2": false,
    "read_more": false,
    "description": "The institute is equipped with high-end equipment in the Radiology Department like 128 Slice CT machine, 3 Tesla MRI Machine, 1.5 Tesla MRI Machine, DR X Ray System, CR X Ray System, Mammography.",
    "path": "SCI/Facilities/8.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae42",
    "color2": "#ced0d51",
    "order": 8
  },
  // {
  //     "_id": "67edf9f274c62b1f3d0231cf",
  //     "id": 38,
  //     "HospitalID": 1,
  //     "title": "Proton Therapy Centre",
  //     "description": "Radiotherapy is the delivery of precisely measured dose of radiation accurately targeted to the diseased area which are mostly malignant tumours and occasionally to a non-malignant condition. During the last 100 years, Radiation Oncology underwent tremendous development including technological advances. High energy X-Rays from different types of Linear Accelerators have been used predominantly. However, in recent time, Particle Beam Therapies are gaining popularity in Oncology due to their physical and biological advantages. While X-rays or Photons are without any mass and charge, in contrast, Particles have both charge and mass. Protons are positively charged particles possessing unique Physical and Radio-Biological properties. Therefore, Proton Beam Therapy is gaining popularity as a superior Radio-therapeutic tool. Protons are produced and accelerated in a Cyclotron or Synchrotron and then are transported to the nearby treatment machine where the beam is modified and made suitable to treat a particular clinical situation. The Proton beam may also be optimised and modulated to deliver the most sophisticated treatment Intensity Modulated Proton Therapy (IMPT). Proton beam therapy has undergone tremendous progress and latest radiotherapy techniques have been steadily implemented. It is suggested that Protons are more effective in cancer cell killing than photons. The unique physical property of Proton is its Bragg Peak effect, which means that the deposition of energy ends with a peak. This peak may be targeted to the tumour resulting in sparing of nearby critical organs from radiation damage. In this era of Personalised Medicine, Protons may prove to be superior with combination with Immunotherapy. Proton therapy has advantages in treatment of Childhood Cancers because of dose conformality and normal tissue/organ sparing effect with obvious advantages. Another site where Proton has the superiority is Skull based or Sino-nasal malignancies. Proton therapy has shown to be of promising results in treatment of Brain Tumours. Many other sites are also treated with Protons including Head & Neck cancers, Breast cancers, Thoracic malignancies, Prostate cancers, Re-Irradiation (second time treatment after a failed first treatment) and many. Some radio-resistant tumours, viz Chordoma, Melanoma, are ought to be better managed by Proton therapy due higher dose of radiation required to treat these conditions. The first Proton Therapy unit in India was installed in 2018 and the second unit is also functional. There are more upcoming installations taking into considerations of challenges and opportunities.",
  //     "path": "SCI/Facilities/10.jpg",
  //     "Loader": "#0076bd",
  //     "color1": "#cbdae5",
  //     "color2": "#ced0d28",
  //     "order": 9
  // },

  {
    "_id": "67edf9f274c62b1f3d0231x19",
    "id": 98,
    "HospitalID": 1,
    "title": "Laboratory Services",
    "short_description": "The institute is equipped with an advanced unit with Histopathology, Cytology services along with routine Pathology, Biochemistry etc",
    "long_description": "The institute is equipped with an advanced unit with Histopathology, Cytology services along with routine Pathology, Biochemistry etc",
    "read_more2": false,
    "read_more": false,
    "description": "The institute is equipped with an advanced unit with Histopathology, Cytology services along with routine Pathology, Biochemistry etc",
    "path": "SCI/Facilities/45.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae54",
    "color2": "#ced0d2",
    "order": 19
  },

  // from dibrugarh 
  {
    "_id": "67edf9f274c62b1f3d0231d210",
    "id": 99,
    "HospitalID": 1,
    "title": "Medical Oncology",
    "short_description": "Medical Oncology is a branch of medicine that specializes in the diagnosis and treatment of cancer. It is a super-specialty field where Medical Oncologists treat various types of cancer using medications, including chemotherapy, immunotherapy, targeted therapy, and hormone therapy.\n\nThe center has a dedicated daycare setup with modern Chemo Daycare wards.",
    "long_description": "Medical Oncology is a branch of medicine that specializes in the diagnosis and treatment of cancer. It is a super-specialty field where Medical Oncologists treat various types of cancer using medications, including chemotherapy, immunotherapy, targeted therapy, and hormone therapy.\n\nThe center has a dedicated daycare setup with modern Chemo Daycare wards.",
    "read_more2": false,
    "read_more": true,
    "description": "Medical Oncology is a branch of medicine that specializes in the diagnosis and treatment of cancer. It is a super-specialty field where Medical Oncologists treat various types of cancer using medications, including chemotherapy, immunotherapy, targeted therapy, and hormone therapy.\n\nThe center has a dedicated daycare setup with modern Chemo Daycare wards.\n\nThe department operates a dedicated OPD service every day, along with daycare services for chemotherapy. In addition, the department has a long-term chemotherapy ward for hospitalized patients, supportive care wards, an isolation block for neutropenic patients, and hemato-oncology services.",
    "path": "SCI/Facilities/13.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae54",
    "color2": "#ced0d51",
    "order": 12
  },

  {
    "_id": "67edf9f274c62b1f3d0231d311",
    "id": 42,
    "HospitalID": 1,
    "title": "Surgical Oncology",
    "short_description": "Surgical Oncology is the field of cancer care that focuses on surgery to diagnose, stage and treat cancer, and to manage some cancer-related symptoms. Major OT and a Minor OT setup is present at state cancer centre.",
    "long_description": "Surgical Oncology is the field of cancer care that focuses on surgery to diagnose, stage and treat cancer, and to manage some cancer-related symptoms. Major OT and a Minor OT setup is present at state cancer centre.",
    "read_more2": false,
    "read_more": false,
    "description": "Surgical Oncology is the field of cancer care that focuses on surgery to diagnose, stage and treat cancer, and to manage some cancer-related symptoms. Major OT and a Minor OT setup is present at state cancer centre.",
    "path": "SCI/Facilities/14.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae54",
    "color2": "#ced0d51",
    "order": 13
  },

  {
    "_id": "67edf9f274c62b1f3d0231d312",
    "id": 43,
    "HospitalID": 1,
    "title": "Preventive Oncology",
    "short_description": "The institute's Preventive Oncology Department is working proactively against cancer, focusing on reducing risk, detecting early changes, and stopping the disease progression.\n\n The department is manned by qualified onco-gynaecologist,  dentist and oncology trained nurses and other support staffs.",
    "long_description": "The institute's Preventive Oncology Department at SCI is working proactively against cancer, focusing on reducing risk, detecting early changes, and stopping the disease progression.\n\n The department is manned by qualified onco-gynaecologist,  dentist and oncology trained nurses and other support staffs. \n\nServices Offered are Preventive health check-ups, Cancer Screening (Oral, Breast, and Cervical Cancer), Mammography, PAP Smear Test, HPV DNA Test, HPV vaccination, Tobacco Cessation Services, Screening for Special Groups (HIV, Hepatitis B), Counselling services.\n\n The department also act as a training centre for different cancer screenings, vaccination, tobacco cessation etc.",
    "read_more2": false,
    "read_more": true,
    "description": `The institute's Preventive Oncology Department at SCI is working proactively against cancer, focusing on reducing risk, detecting early changes, and stopping the disease progression.\n\n The department is manned by qualified onco-gynaecologist,  dentist and oncology trained nurses and other support staffs. \n\nServices Offered are Preventive health check-ups, Cancer Screening (Oral, Breast, and Cervical Cancer), Mammography, PAP Smear Test, HPV DNA Test, HPV vaccination, Tobacco Cessation Services, Screening for Special Groups (HIV, Hepatitis B), Counselling services.\n\n The department also act as a training centre for different cancer screenings, vaccination, tobacco cessation etc.`,
    "path": "SCI/Facilities/preventive.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae54",
    "color2": "#ced0d51",
    "order": 14
  },

  {
    "_id": "67edf9f274c62b1f3d0231d413",
    "id": 44,
    "HospitalID": 1,
    "title": "Palliative Medicine",
    "short_description": "Palliative Care is an approach that improves the quality of life of patients (adults and children) who are suffering from life limiting illness, and their families.Palliative Care includes not only cancer patients but non-cancer patients as well.",
    "long_description": "Palliative Care is an approach that improves the quality of life of patients (adults and children) who are suffering from life limiting illness, and their families.Palliative Care includes not only cancer patients but non-cancer patients as well.\n\nAlthough Palliative Care is thought to be synonymous with Terminal or End of Life Care but it is not always true because Palliative Care should start from the time of diagnosis of a terminal illness and go along with curative treatment like surgery, chemotherapy and radiation therapy.Palliative Care extends upto bereavement support for the patient's family.\n\nPalliative Care also includes respite, hospice and home care for patients.Good communication, proper pain and other symptom management along with counselling are other aspects of Palliative Care.Palliative Care respects the ethical issues in terms of communication regarding prognostication and futile treatment.",
    "read_more2": false,
    "read_more": true,
    "description": "Palliative Care is an approach that improves the quality of life of patients (adults and children) who are suffering from life limiting illness, and their families.Palliative Care includes not only cancer patients but non-cancer patients as well.\n\nAlthough Palliative Care is thought to be synonymous with Terminal or End of Life Care but it is not always true because Palliative Care should start from the time of diagnosis of a terminal illness and go along with curative treatment like surgery, chemotherapy and radiation therapy.Palliative Care extends upto bereavement support for the patient's family.\n\nPalliative Care also includes respite, hospice and home care for patients.Good communication, proper pain and other symptom management along with counselling are other aspects of Palliative Care.Palliative Care respects the ethical issues in terms of communication regarding prognostication and futile treatment.",
    "path": "SCI/Facilities/15.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae54",
    "color2": "#ced0d51",
    "order": 15
  },

  {
    "_id": "67edf9f274c62b1f3d0231d014",
    "id": 39,
    "HospitalID": 1,
    "title": "Emergency Medicine",
    "short_description": "Emergency medicine is available at the centre for our existing cancer patients.",
    "long_description": "Emergency medicine is available at the centre for our existing cancer patients.",
    "read_more2": false,
    "read_more": false,
    "description": "Emergency medicine is available at the centre for our existing cancer patients.",
    "path": "SCI/Facilities/11.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae42",
    "color2": "#ced0d39",
    "order": 10
  },

  // {
  //   "_id": "67edf9f274c62b1f3d0231d5",
  //   "id": 44,
  //   "HospitalID": 1,
  //   "title": "Nuclear Medicine",
  //   "description": "Nuclear medicine is a specialized area of radiology that uses very small amounts of radioactive materials, or radiopharmaceuticals, to examine organ function and structure. This branch of radiology is often used to help diagnose and treat abnormalities very early in the progression of a disease.",
  //   "path": "SCI/Facilities/16.jpg",
  //   "Loader": "#0076bd",
  //   "color1": "#cbdae54",
  //   "color2": "#ced0d51",
  //   "order": 15
  // },


  {
    "_id": "67edf9f274c62b1f3d0231d615",
    "id": 45,
    "HospitalID": 1,
    "title": "Anesthesiology",
    "short_description": "It is the medical specialty concerned with the total perioperative care of patients before, during and after surgery/procedure. It involves use of anesthesia to safely support a patient's vital functions through out the perioperative period. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine.\n\nThe institute have a full-fledged Anesthesia department",
    "long_description": "It is the medical specialty concerned with the total perioperative care of patients before, during and after surgery/procedure. It involves use of anesthesia to safely support a patient's vital functions through out the perioperative period. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine.\n\nThe institute have a full-fledged Anesthesia department",
    "read_more2": false,
    "read_more": false,
    "description": "It is the medical specialty concerned with the total perioperative care of patients before, during and after surgery/procedure. It involves use of anesthesia to safely support a patient's vital functions through out the perioperative period. It encompasses anesthesia, intensive care medicine, critical emergency medicine, and pain medicine.\n\nThe institute have a full-fledged Anesthesia department",
    "path": "SCI/Facilities/19.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae54",
    "color2": "#ced0d51",
    "order": 16
  },


  {
    "_id": "67edf9f274c62b1f3d0231e616",
    "id": 49,
    "HospitalID": 1,
    "title": "Endoscopy Services",
    "short_description": "The endoscopy procedure uses an endoscope to examine the interior of a hollow organ or cavity of the body. Unlike many other medical imaging techniques, endoscopes are inserted directly into the organ. Most commonly we do endoscopy to examine the gastrointestinal tract.",
    "long_description": "The endoscopy procedure uses an endoscope to examine the interior of a hollow organ or cavity of the body. Unlike many other medical imaging techniques, endoscopes are inserted directly into the organ. Most commonly we do endoscopy to examine the gastrointestinal tract.",
    "read_more2": false,
    "read_more": false,
    "description": "The endoscopy procedure uses an endoscope to examine the interior of a hollow organ or cavity of the body. Unlike many other medical imaging techniques, endoscopes are inserted directly into the organ. Most commonly we do endoscopy to examine the gastrointestinal tract.",
    "path": "SCI/Facilities/49.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae54",
    "color2": "#ced0d51",
    "order": 49
  },




  {
    "_id": "67edf9f274c62b1f3d0231d717",
    "id": 46,
    "HospitalID": 1,
    "title": "Critical care (ICU)",
    "short_description": "Critical care is medical care for people who have life-threatening injuries and illnesses. It usually takes place in an intensive care unit (ICU). A team of specially trained health care providers gives you 24-hour care.\n\n This includes using machines to constantly monitor your vital signs. We are having ICU and HDU set up at the State Cancer Institute to take care of Cancer patients who need ICU care.",
    "long_description": "Critical care is medical care for people who have life-threatening injuries and illnesses. It usually takes place in an intensive care unit (ICU). A team of specially trained health care providers gives you 24-hour care.\n\n This includes using machines to constantly monitor your vital signs. We are having ICU and HDU set up at the State Cancer Institute to take care of Cancer patients who need ICU care.",
    "read_more2": false,
    "read_more": false,
    "description": "Critical care is medical care for people who have life-threatening injuries and illnesses. It usually takes place in an intensive care unit (ICU). A team of specially trained health care providers gives you 24-hour care.\n\n This includes using machines to constantly monitor your vital signs. We are having ICU and HDU set up at the State Cancer Institute to take care of Cancer patients who need ICU care.",
    "path": "SCI/Facilities/18.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae54",
    "color2": "#ced0d51",
    "order": 17
  },








  // from dibrugarh



  // {
  //     "_id": "67edf9f274c62b1f3d0231ce",
  //     "id": 41,
  //     "HospitalID": 1,
  //     "title": "Tele Health Services - Tele-radiology, Virtual Tumour Board (VTB), DiNC",
  //     "description": "The facilities are digitally enabled by DiNC. The centre connects the three-tier hospital network in real timne for delivery of virtual care as well as through effective and efficient communication. Tele Radiology & Pathalogy, Virtual Tumour Board, Training and Accreditation, Centralised Treatment Planning, Patient Navigation, Telemedicine, Clinical Command Centre.",
  //     "path": "SCI/Facilities/9.jpg",
  //     "Loader": "#0076bd",
  //     "color1": "#cbdae54",
  //     "color2": "#ced0d2",
  //     "order": 12
  // },


  {
    "_id": "67edf9f274c62b1f3d0231d118",
    "id": 40,
    "HospitalID": 1,
    "title": "Ambulance Service",
    "short_description": "Ambulance service is available.",
    "long_description": "Ambulance service is available.",
    "read_more2": false,
    "read_more": false,
    "description": "Ambulance service is available.",
    "path": "SCI/Facilities/12.jpg",
    "Loader": "#0076bd",
    "color1": "#cbdae54",
    "color2": "#ced0d51",
    "order": 11
  },
]

export const FetchHospitalsData = [

  {
    "_id": "67de3bd06487342f61ecdfe3",
    "id": 3,
    "name": "BARPETA CANCER CENTRE",
    "domain": "https://barpetacancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7152.158202780259!2d90.97631346977539!3d26.32393799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37599dfa07ce4509%3A0xe74899e5b2d34f24!2sBarpeta%20Cancer%20Centre!5e0!3m2!1sen!2sin!4v1659002675390!5m2!1sen!2sin",
    "PhoneNumber": "+91 6026332174",
    "WhatsAppNumber": "94356 47725",
    "Address": "FAAMCH Campus ,Jania Road , Joti Gaon , Barpeta(Assam). Pin 781301 .",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Barpeta/logo/logo.png"
  },

  {
    "_id": "67de3bd06487342f61ecdfe8",
    "id": 8,
    "name": "DIBRUGARH CANCER CENTRE",
    "domain": "https://dibrugarhcancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14158.20432243162!2d94.946242!3d27.483232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374099f9a770c52d%3A0xcecf8c7af5f57e89!2sDibrugarh%20Cancer%20Centre!5e0!3m2!1sen!2sin!4v1742616826161!5m2!1sen!2sin",
    "PhoneNumber": "91 6026332165",
    "WhatsAppNumber": "94356 47725",
    "Address": "Dibrugarh Cancer Centre, Near Namghar, Assam Medical College Campus, Dibrugarh, Assam, 786002.",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Dibrugarh/logo/logo.png"
  },

  {
    "_id": "67de3bd06487342f61ecdfe4",
    "id": 4,
    "name": "DARRANG CANCER CENTRE",
    "domain": "https://darrangcancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28580.924975775728!2d92.038973!3d26.435878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375b1d56bc8e4d1f%3A0xdad0a9647179e4ff!2sAssam%20cancer%20care%2C%20Darrang%2C%20Mangaldoi!5e0!3m2!1sen!2sin!4v1742616576781!5m2!1sen!2sin",
    "PhoneNumber": "+91 6026332202",
    "WhatsAppNumber": "94356 47725",
    "Address": "Darrang Cancer Centre, Behind Mangaldai Civil Hospital, Baghpari Chapori, Mangaldoi, Darrang, Assam, 784125",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Darrang/logo/logo.png"
  },

  {
    "_id": "67de3bd06487342f61ecdfe9",
    "id": 9,
    "name": "JORHAT CANCER CENTRE",
    "domain": "https://jorhatcancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d228034.79786141418!2d94.197948!3d26.742981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746c31f3536f399%3A0x653eb08956568d34!2sJorhat%20Cancer%20Centre%20ACCF!5e0!3m2!1sen!2sin!4v1742616856683!5m2!1sen!2sin",
    "PhoneNumber": "91 6026332209",
    "WhatsAppNumber": "94356 47725",
    "Address": "Jorhat Cancer Centre, C/o Jorhat Medical College, Jail Road, Jorhat, Jorhat, Assam, 785001",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Jorhat/logo/logo.png"
  },

  {
    "_id": "67de3bd06487342f61ecdfe6",
    "id": 6,
    "name": "KOKRAJHAR CANCER CENTRE",
    "domain": "https://kokrajharcancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1828739.9773294877!2d90.280884!3d26.463536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37588b6b0e849949%3A0xd965f2e851130df7!2sKokrajhar%20Cancer%20Care%20Hospital!5e0!3m2!1sen!2sin!4v1742616785038!5m2!1sen!2sin",
    "PhoneNumber": 9395891501,
    "WhatsAppNumber": "94356 47725",
    "Address": "Kokrajhar Cancer Centre, Near Kokrajhar Medical College & Hospital , Besorgaon, P.O : Rangalikhata -II, District : Kokrajhar ,BTR, Assam, Pin:783370",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Kokrajhar/logo/logo.png"
  },

  {
    "_id": "67de3bd06487342f61ecdfe2",
    "id": 2,
    "name": "LAKHIMPUR CANCER CENTRE",
    "domain": "https://lakhimpurcancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14527113.716549069!2d94.09987!3d27.261234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374137719ce40f01%3A0x7100ad598a1ca96c!2sLakhimpur%20Cancer%20Centre!5e0!3m2!1sen!2sin!4v1741931783298!5m2!1sen!2sin",
    "PhoneNumber": "+91 6026332184",
    "WhatsAppNumber": "94356 47725",
    "Address": "Lakhimpur Cancer Centre, Opposite St. Marrys High School, Nakari, Saboti, North Lakhimpur, Lakhimpur, Assam, 787001",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Lakhimpur/logo/logo.png"
  },

  {
    "_id": "67de3bd06487342f61ecdfe5",
    "id": 5,
    "name": "TEZPUR CANCER CENTRE",
    "domain": "https://tezpurcancercentre.org/",
    "Location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d912667.0492247979!2d92.662631!3d26.677103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744c5c3e215dd71%3A0x4d4a39d59d0d40cf!2sTezpur%20cancer%20centre%20ACCF!5e0!3m2!1sen!2sin!4v1742616748044!5m2!1sen!2sin",
    "PhoneNumber": "+91 6026332180",
    "WhatsAppNumber": "94356 47725",
    "Address": "Tezpur Cancer Centre, Opposite Chandranath Sarma H.S School, Near Tezpur Medical College and Hospital, Geruabari,Bihaguri, Sonitpur, Assam, 784153",
    "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
    "Twitter": "https://x.com/CareAssam",
    "Insta": "https://www.instagram.com/careassam/",
    "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
    "Logo": "/Tezpur/logo/logo.png"
  },

  // {
  //     "_id": "67de3bd06487342f61ecdfe7",
  //     "id": 7,
  //     "name": "SILCHAR CANCER CENTRE",
  //     "WhatsAppNumber": "94356 47725",
  //     "Facebook": "https://www.facebook.com/AssamCancerCareFoundation/",
  //     "Twitter": "https://x.com/CareAssam",
  //     "Insta": "https://www.instagram.com/careassam/",
  //     "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
  //     "Logo": "/Silchar/logo/logo.png"
  // },

  // {
  //     "_id": "67de3bd06487342f61ecdfe1",
  //     "id": 1,
  //     "name": "STATE CANCER INSTITUTE GUWAHATI",
  //     "domain": "https://cancercareinstituteguwahati.org/",
  //     "Location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.1347530850453!2d91.76288917486926!3d26.159740542044343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a590073ceb703%3A0x13cae1a490750ee1!2sState%20Cancer%20Institute%2CGuwahati%20Assam!5e0!3m2!1sen!2sin!4v1741872609450!5m2!1sen!2sin",
  //     "PhoneNumber": "+91 9085202020",
  //     "WhatsAppNumber": "94356 47725",
  //     "Address": "3rd Floor, V.K Trade Centre, Opp DownTown Hospital, G S Road, Guwahati, Assam PIN–781022",
  //     "Facebook": "https://www.facebook.com/CancerHospitalGMCH/",
  //     "Twitter": "https://x.com/gmcsci",
  //     "Insta": "https://www.instagram.com/explore/locations/1242067485951109/assam-state-cancer-institute/",
  //     "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
  //     "Logo": "/SCI/logo/logo.png"
  // },




]

export const FetchAboutUs = [
  {
    "_id": "67e008c4738919e55f45e3ef",
    "HospitalID": 1,
    "title": "Who we are",
    "short_description": "The State Cancer Institute (SCI), Guwahati was established on 17 February 2017 to cater to the needs of the cancer patients of the region who used to go to metro cities located outside of the state for treatment. The hospital started with 135 beds and by 2024 it has been expanded to 350 beds.\n\nThe hospital serves as the apex centre of Assam Cancer Care Foundation (ACCF) – an initiative of the Government of Assam and the Tata Trusts. The Government of Assam has entrusted the operational charges to ACCF while the academic section continues with Gauhati Medical College.",
    "read_more2": true,
    "description": "The State Cancer Institute (SCI), Guwahati was established on 17 February 2017 to cater to the needs of the cancer patients of the region who used to go to metro cities located outside of the state for treatment. The hospital started with 135 beds and by 2024 it has been expanded to 350 beds.\n\nThe hospital serves as the apex centre of Assam Cancer Care Foundation (ACCF) – an initiative of the Government of Assam and the Tata Trusts. The Government of Assam has entrusted the operational charges to ACCF while the academic section continues with Gauhati Medical College.\n\nThe expansion of SCI to a total area of 4.76 lakh square feet represents a significant enhancement in infrastructure - allowing incorporation of additional advanced facilities and services to better serve cancer patients. The hospital will significantly increase its capacity to accommodate patients, ensuring they receive high-quality, affordable care.\n\nEstablished in August 2016 as a 200-bedded Cancer Hospital under Gauhati Medical College, the State Cancer Institute (SCI) has been a landmark addition to Assam’s oncology care infrastructure. It was formally inaugurated on 17th February 2017 by Dr. J.P. Nadda, the then Union Health Minister of India, becoming the third cancer hospital in Assam after B. Borooah Cancer Institute and Cachar Cancer Hospital.\n\nIn 2018, the Government of India conferred SCI with the prestigious status of a State Cancer Institute, with Dr. B.C. Goswami serving as its founding Director. The institute was initially equipped with state-of-the-art technology, including the Elekta Synergy LINAC, PET-CT, and Cyclotron, followed by Telecobalt and Brachytherapy systems.\n\nOver time, SCI has continued to integrate advanced medical technologies, such as High-end Linear Accelerator (LINAC), 3D Treatment Planning System (TPS), CT, MRI, Mammography, Digital X-ray, and 3D/4D Ultrasound, Dual-head Gamma Camera, and Robotic Surgery. Additionally, SCI has undertaken vertical expansion, extending to the 5th and 6th floors to accommodate future advancements.\n\nWith a comprehensive and holistic approach to oncology, SCI is equipped with a Nuclear Medicine Department, Comprehensive Radiodiagnosis Unit (CT, MRI, Ultrasound), Advanced Oncology Laboratory & Molecular Lab, and a Fully Equipped Blood Bank. SCI offers all three pillars of cancer treatment—radiation, medical, and surgical oncology—alongside superior diagnostics and palliative care, ensuring world-class cancer treatment and research for patients across the region.\n\nIn May 2017, Tata Trusts initiated discussions with the State Cancer Institute (SCI) to support its modernization, marking the beginning of a transformative journey in oncology care. As part of this collaboration, Tata Trusts undertook the beautification of SCI, creating a garden and enhancing housekeeping services to provide a more patient-friendly environment.\n\nA major milestone was achieved with the establishment of the Digital Nerve Centre (DiNC) in partnership with Tata Consultancy Services (TCS), aimed at enhancing patient experience through advanced digital interventions. Assam Cancer Care Foundation (ACCF) further strengthened its support to SCI by continuing to provide essential housekeeping and patient care services.\n\nIn a significant expansion move, the design for the new SCI building was finalized in September 2018, with construction commencing under Larsen & Toubro (L&T) in September 2019. A key addition to the institute’s infrastructure, the state-of-the-art Radiation Block, was inaugurated by the Hon’ble Home Minister, Shri Amit Shah, in July 2021.\n\nAfter years of dedicated efforts, the new SCI building was successfully completed and formally inaugurated by the Hon’ble Chief Minister of Assam, Shri Himanta Biswa Sarma, on 2nd March 2024, ushering in a new era of comprehensive cancer care in the region.\n\nAs a pioneering centre for advanced oncology care, SCI has continually evolved, integrating cutting-edge medical technologies. Under the Assam Cancer Care Foundation, the institute’s new Radiation Therapy Block has been equipped with state-of-the-art Tomo-Therapy and LINAC machines, reinforcing its mission to deliver world-class cancer treatment.\n\nAs we celebrate 17th February as the Foundation Day of State Cancer Institute, Guwahati, heartfelt congratulations go to the dedicated team at Assam Cancer Care Foundation, whose relentless efforts have made this achievement possible. This facility is set to bring solace to countless patients, alleviating suffering and providing renewed hope.\n\nThe establishment of this cutting-edge nuclear medicine facility at SCI marks a transformative leap in cancer diagnostics and treatment, benefiting not just the people of Assam, but the entire Northeastern Region. This advanced technology will significantly enhance precision in cancer care, enabling early detection and more effective therapeutic interventions.\n\nRecognizing the challenges faced by cancer patients in the state, the Government of Assam and Tata Trusts signed an MoU on 3rd February 2018 to implement the Distributed Cancer Care Model. This three-tiered model is designed to provide comprehensive cancer care, ranging from diagnostic tests to advanced treatment procedures, while strengthening the existing public health system.\n\nAs part of this initiative, a structured hierarchy of cancer care facilities is being developed, including State Cancer Institute, Guwahati as the Apex Referral Centre, Comprehensive Cancer Hospitals, and Diagnostic & Day Care Centres adjacent to Government Medical Colleges and District Hospitals.\n\nSCI, Guwahati, is poised to become the Level 1 Apex Cancer Referral Centre of Assam, setting new benchmarks in comprehensive oncology care. The newly expanded facility now houses 350 beds, including suites, private and semi-private cabins, and general wards, ensuring a patient-centric approach to treatment.\n\nThe institute features 8 advanced state-of-the-art modular operating theatres, 23 Intensive Care Units Beds, a dedicated Bone Marrow Transplant (BMT) facility, and a cutting-edge Critical Care Unit equipped with the latest diagnostic and life-support technologies.\n\nIt stands as a testament to SCI’s commitment to excellence, featuring some of the most advanced cancer treatment technologies, including Tomo Therapy System, Linear Accelerators (LINACs), and future plans for an MRI-guided Linear Accelerator. With these advancements, SCI is set to redefine cancer care in the region, offering unparalleled treatment and hope to patients.\n\nAt SCI, Guwahati, patients receive trusted and compassionate care from a highly skilled multidisciplinary team dedicated to excellence in oncology. The institute brings together specialists from various fields, including Radiation Oncologists, Medical Oncologists, Surgical Oncologists, Maxillofacial Surgeons, Anesthetists, Nuclear Medicine Specialists, Radiologists, and Oncopathologists.\n\nWith seamless coordination, the team at SCI ensures a comprehensive and integrated approach to cancer treatment, reaffirming its position as a premier cancer care institution in the region.\n\nThe new building of the State Cancer Institute (SCI) has been operationalized in a phased manner, ensuring superior quality of service and a state-of-the-art healthcare experience. The following facilities have been introduced, significantly enhancing patient care: Medical Oncology OPD, Surgical Oncology OPD, Head & Neck Oncology OPD, Dental OPD, Day Care & Long Chemotherapy Wards, General Wards & Twin Sharing Rooms, Blood Collection Centre, Advanced Diagnostic Unit featuring MRI, CT Scan, X-ray, Ultrasound, and Mammography, Physiotherapy Unit, 24-Hour Emergency Ward & Palliative Procedure Room, Oncopathology Laboratory, Biochemistry Laboratory, Microbiology Laboratory, Mortuary, and a State-of-the-Art Laundry Facility.\n\nSCI further expanded its services with the inauguration of the Preventive Oncology Department. This department focuses on early detection and timely intervention, offering screening services for Oral, Breast, and Cervical Cancer, reinforcing SCI’s commitment to comprehensive cancer prevention and care.",
    "active": "Y",
    "path": "SCI/about/whoWeAre.jpg"
  },
  {
    "_id": "67f1623946886839f4f9b661",
    "HospitalID": 1,
    "title": "Key facilities",
    "short_description": "SCI offers facilities like Radiation Oncology (LINAC, TomoTherapy, Brachytherapy), Medical Oncology (Chemotherapy), Surgical Oncology (Robotic Surgery), and Nuclear Medicine (PET-CT, PET-MRI, Gamma Camera, Cyclotron).\n\nAdditional specialized services include Bone Marrow Transplant, Cath Lab, Preventive Oncology, Pain & Palliative Medicine, and Emergency Onco Care.",
    "read_more2": true,
    "description": "SCI offers facilities like Radiation Oncology (LINAC, TomoTherapy, Brachytherapy), Medical Oncology (Chemotherapy), Surgical Oncology (Robotic Surgery), and Nuclear Medicine (PET-CT, PET-MRI, Gamma Camera, Cyclotron).\n\nAdditional specialized services include Bone Marrow Transplant, Cath Lab, Preventive Oncology, Pain & Palliative Medicine, and Emergency Onco Care.\n\nThe institute is equipped with advanced Radiology services such as CT Scan, MRI, X-ray, Mammography, ECG, and USG. It also provides Critical Care through ICU and HDU facilities, and a well-organized Indoor Patient Department.\n\nSCI houses a high-end Laboratory that includes Clinical Pathology, Biochemistry, Microbiology, and Histopathology departments. It also features a full-service Pharmacy, Blood Centre, and offers 24×7 Emergency Services.\n\nFurther strengthening its contribution to healthcare, SCI is actively involved in Research & Academics, supporting innovation and continuous learning in oncology.",
    "active": "Y",
    "path": "SCI/about/keyfacilities.jpg"
  },
  {
    "_id": "67f163b746886839f4f9b662",
    "HospitalID": 1,
    "title": "How does the centre help?",
    "short_description": "Our team of oncologists consists of highly experienced specialists with expertise in medical, surgical, and radiation oncology. They are trained in the latest advancements in cancer treatment and work collaboratively to develop personalised treatment plans tailored to each patient's needs. Their extensive experience in diagnosing and treating various types of cancer ensures precise and effective care.",
    "read_more2": true,
    "description": "Our team of oncologists consists of highly experienced specialists with expertise in medical, surgical, and radiation oncology. They are trained in the latest advancements in cancer treatment and work collaboratively to develop personalised treatment plans tailored to each patient's needs. Their extensive experience in diagnosing and treating various types of cancer ensures precise and effective care.\n\nWe understand that cancer care requires a multidisciplinary approach, and our oncology trained nurses play a crucial role in patient care. They are specially trained to provide compassionate and expert support, ensuring patients receive the best possible assistance throughout their treatment journey.\n\nFrom chemotherapy administration to post-treatment care, our nurses are well-equipped to handle every aspect of cancer care with professionalism and empathy.",
    "active": "Y",
    "path": "SCI/about/centre_help.jpg"
  }
]

// ✅ Fetch News & Events
export async function fetchNewsAndEvents2() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  try {
    const response = await fetch(`https://barpetacancercentre.org/api/get-news-events-for-center`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ccode: "SCI " }),
      next: { revalidate: 900 },
      // cache: "no-store",
    });

    const data = await response.json();
    console.log('Trying to fetch news from barpeta server :', data);
    return data || [];
  } catch (error) {
    console.error("Failed to fetch doctors:", error);
    return [];
  }
}

export const FetchHospitalDetails = {
  "_id": "67de3bd06487342f61ecdfe1",
  "id": 1,
  "name": "STATE CANCER INSTITUTE GUWAHATI",
  "domain": "https://cancercareinstituteguwahati.org/",
  "Location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.1347530850453!2d91.76288917486926!3d26.159740542044343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a590073ceb703%3A0x13cae1a490750ee1!2sState%20Cancer%20Institute%2CGuwahati%20Assam!5e0!3m2!1sen!2sin!4v1741872609450!5m2!1sen!2sin",
  "PhoneNumber": "+91 18003454325",
  "WhatsAppNumber": "94356 47725",
  "Address": "State Cancer Institute, Opposite GMCH, GMC Hospital Rd, Bhangagarh , Guwahati, Assam 781032",
  "Facebook": "https://www.facebook.com/CancerHospitalGMCH/",
  "Twitter": "https://x.com/gmcsci",
  "Insta": "https://www.instagram.com/explore/locations/1242067485951109/assam-state-cancer-institute/",
  "LinkedIN": "https://www.linkedin.com/company/assam-cancer-care-foundation/",
  "Logo": "/SCI/logo/logo.png"
}

export const FetchPartners = [{
  "id": 1,
  "partner_name": "Numaligarh Refinery Ltd",
  "partner_image": "/SCI/Partners/nrl-logo.jpg",
  "path": "https://www.nrl.co.in/"
},
{
  "id": 2,
  "partner_name": "Bharat Petroleum Corporation Ltd",
  "partner_image": "/SCI/Partners/BPCL-Logo.jpg",
  "path": "https://www.bharatpetroleum.in/"
},
{
  "id": 3,
  "partner_name": "Indian Oil Corporation Ltd",
  "partner_image": "/SCI/Partners/Indian_Oil_Logo.svg.png",
  "path": "https://iocl.com/"
},
{
  "id": 4,
  "partner_name": "Pfizer",
  "partner_image": "/SCI/Partners/Pfizer.png",
  "path": "https://www.pfizer.com/"
},
{
  "id": 5,
  "partner_name": "Induslnd Bank",
  "partner_image": "/SCI/Partners/indus3.png",
  "path": "https://www.indusind.com/"
},
{
  "id": 6,
  "partner_name": "D-Mart",
  "partner_image": "/SCI/Partners/DMart.png",
  "path": "https://www.dmartindia.com/"
},
{
  "id": 7,
  "partner_name": "Indus Towers",
  "partner_image": "/SCI/Partners/indus-towers.png",
  "path": "https://www.industowers.com/"
},
{
  "id": 8,
  "partner_name": "LIC Housing Finance Ltd",
  "partner_image": "/SCI/Partners/LIC_Housing_Finance_logo.png",
  "path": "https://www.lichousing.com/"
},
{
  "id": 9,
  "partner_name": "Mindray",
  "partner_image": "/SCI/Partners/mindray.jpg",
  "path": "https://www.mindray.com/"
},
{
  "id": 10,
  "partner_name": "Titan",
  "partner_image": "/SCI/Partners/titan.jpg",
  "path": "http://www.titan.co.in/"
},
{
  "id": 11,
  "partner_name": "Engineers India Ltd",
  "partner_image": "/SCI/Partners/EIL.png",
  "path": "https://engineersindia.com/"
},
{
  "id": 12,
  "partner_name": "Exim Bank",
  "partner_image": "/SCI/Partners/Exim.jpg",
  "path": "https://www.eximbankindia.in/"
},
{
  "id": 13,
  "partner_name": "Federal Bank",
  "partner_image": "/SCI/Partners/fedarel.png",
  "path": "https://www.federalbank.co.in/"
},
{
  "id": 14,
  "partner_name": "National Thermal Power Corporation",
  "partner_image": "/SCI/Partners/NTPC.jpg",
  "path": "https://ntpc.co.in/"
},
{
  "id": 15,
  "partner_name": "Brahmaputra Crackers and Polymers Ltd",
  "partner_image": "/SCI/Partners/BCPL.jpg",
  "path": "https://bcplonline.co.in/"
}]
