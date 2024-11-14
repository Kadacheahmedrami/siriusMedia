import Image from "next/image";

export default function Home() {
  return (
    <>
     <div className="card-container">
      <a href="https://www.facebook.com/profile.php?id=61558745182612&locale=fr_FR">
        <div className="card">
          <div className="wrapper">
            <Image src="/222.svg" alt="Facebook Cover" width={500} height={300} className="cover-image" />
          </div>
          <Image src="/Facebook.svg" alt="Facebook Title" width={150} height={50} className="title" />
          <Image src="/fb.svg" alt="Facebook Icon" width={100} height={100} className="character" />
        </div>
      </a>

      <a href="https://www.instagram.com/sirius.estin/">
        <div className="card">
          <div className="wrapper">
            <Image src="/222.svg" alt="Instagram Cover" width={500} height={300} className="cover-image" />
          </div>
          <Image src="/Instgram.svg" alt="Instagram Title" width={150} height={50} className="title t" />
          <Image src="/in.svg" alt="Instagram Icon" width={100} height={100} className="character c" />
        </div>
      </a>

      <a href="https://www.linkedin.com/company/sirius-estin/posts/?feedView=all">
        <div className="card">
          <div className="wrapper">
            <Image src="/222.svg" alt="LinkedIn Cover" width={500} height={300} className="cover-image" />
          </div>
          <Image src="/Linked In.svg" alt="LinkedIn Title" width={150} height={50} className="title" />
          <Image src="/lin.svg" alt="LinkedIn Icon" width={100} height={100} className="character" />
        </div>
      </a>
    </div>
    </>
   
  );
}
