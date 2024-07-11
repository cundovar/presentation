import React, { useState } from 'react';
import data from './data.json';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Section = ({ title, items, id }) => (
  <div id={id} className=' p-1  xl:p-10'>
    <h2 className='p-1 mb-3 mt-3 text-md border-b '>{title}</h2>
    <ul className='xl:ml-10 space-y-3 shadow-xl rounded-lg bg-yellow-50 max-sm:p-2 sm:p-5 xl:p-20'>
      {items && items.length > 0 ? items.map((item, index) => (
        <li className='flex' key={index}><ArrowRightIcon /> <div className=''>{item}</div> </li>
      )) : <li>Pas de données disponibles</li>}
    </ul>
  </div>
);

const Home = () => {
  const { competence_developpement_web, competence_pedagogique, motivation} = data;
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = [];
    const searchTermLower = searchTerm.toLowerCase();

    const searchInObject = (obj, sectionId) => {
      Object.entries(obj).forEach(([key, items]) => {
        const id = `${sectionId}-${key}`;
        items.forEach((item) => {
          if (item.toLowerCase().includes(searchTermLower)) {
            results.push({ id, item });
          }
        });
      });
    };

    searchInObject(competence_developpement_web, 'competence_developpement_web');
    searchInObject(competence_pedagogique, 'competence_pedagogique');
    searchInObject(motivation, 'motivation');
  

    
    setSearchResults(results);
    setShowModal(true);
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setShowModal(false); // Close the modal immediately
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Delay to allow the modal to close properly
  };

  const renderSection = (dataObject, sectionTitle, sectionId) => (
    <>
      <h1 className='text-xl p-2 bg-emerald-100 mb-5 mt-5'>{sectionTitle}</h1>
      {dataObject ? Object.entries(dataObject).map(([key, value]) => {
        const id = `${sectionId}-${key}`;
        return <Section key={key} id={id} title={key.replace(/_/g, ' ').toUpperCase()} items={value} />;
      }) : <p>Pas de données disponibles</p>}
    </>
  );

  return (
    <div className='xl:w-2/3 w-full  m-auto p-3'>
      <header className='mb-10'>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">Facundo Varas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Compétence dev web" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#competence_developpement_web-html">HTML</NavDropdown.Item>
                  <NavDropdown.Item href="#competence_developpement_web-css">CSS</NavDropdown.Item>
                  <NavDropdown.Item href="#competence_developpement_web-javascript">JavaScript</NavDropdown.Item>
                  <NavDropdown.Item href="#competence_developpement_web-php">PHP</NavDropdown.Item>
                  <NavDropdown.Item href="#competence_developpement_web-wordpress">WordPress</NavDropdown.Item>
                  <NavDropdown.Item href="#competence_developpement_web-figma">Figma</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Compétences pédagogiques" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#competence_pedagogique-cour">Préparation cour</NavDropdown.Item>
                  <NavDropdown.Item href="#competence_pedagogique-preparation_du_cour">Cour</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Autres" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#motivation-motiv">Motivation</NavDropdown.Item>
               
                </NavDropdown>
              </Nav>
              <form onSubmit={handleSearch} className="d-flex">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control me-2"
                />
                <Button type="submit" variant="outline-success">Rechercher</Button>
              </form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <section className='w-full xl:flex'>
        <article className='xl:w-1/2 xl:p-10 max-xl:p-5  space-y-3 text-justify font-medium text-lg'>
        <p>Je me suis permis de faire une petite page web pour synthétiser mes compétences ou compétences supposées. </p>
        <p><span className='text-red-400'>Je ne connais pas tout par coeur</span>, à chaque fois que je fais un projet je dois chercher comment on écrit telle ou telle fonction même des choses toutes bêtes.</p>
        <p>Mais le challenge ici n’est pas tant technique mais <span className='text-red-400'>humain</span> , c'est-à-dire de comment transmettre un savoir tout en étant modeste ( dans mon cas).</p>
        <p>Étant donné que j’ai travaillé avec les enfants, j’ai un  <span className='text-red-400'>CAP petite enfance</span> , durant plusieurs années je pense avoir de la patience et une certaine vivacité d’esprit.
j’ai appris aussi à organiser un groupe, à gérer les différentes étapes des activités. Devoir s’adapter aux imprévus ( des enfants de 4 ans si il n’y a pas d’imprévus ce n’est pas normal !)
</p>


        </article>
        <article className='xl:w-1/2    max-xl:p-5 xl:p-10  space-y-3 text-justify font-medium text-lg'>
       
<p>
J’ai une expérience d’auto-entrepreneur. J’ai travaillé avec des particuliers ou associations ayant besoin de site vitrine : 
</p>
<ul className='space-y-3  border-b pb-5 p-2'>
    <li> </li>
    <li className='flex'><ArrowRightIcon /> <div className=''>Un site wordpress pour une association d'artiste ( gestion de woocommerce ACF thème enfant…)</div> </li>
    <li className='flex'><ArrowRightIcon /> <div className=''>Un site wordrpress pour une maison dédition</div></li>
    <li className='flex'><ArrowRightIcon /> <div className=''>Un site de peinture ( ReactJs et symfony/php)</div></li>
</ul>
<div className='flex w-full justify-around pt-10 '>
    <button type='button' className='p-3 w-30 shadow-md btn border hover:bg-slate-800 hover:text-gray-100'> <a href='/cv.pdf' target='_blank'>CV</a></button>
    <button type='button' className='p-3 w-30 shadow-md btn border hover:bg-slate-800 hover:text-gray-100'> <a href='https://pixell.varascundo.com/' target='_blank'>portfolio</a></button>
</div>


        </article>
      </section>
      {renderSection(competence_developpement_web, 'Compétences en Développement Web', 'competence_developpement_web')}
      {renderSection(competence_pedagogique, 'Compétences Pédagogiques', 'competence_pedagogique')}
      {renderSection(motivation, 'Motivation', 'motivation')}
    

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Résultats de la recherche</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result, index) => (
                <li key={index}>
                  <a href={`#${result.id}`} onClick={(e) => handleLinkClick(e, result.id)}>{result.item}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Pas de résultats trouvés</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    <footer className='m-10 border relative p-3'>
        <p>Page realisé avec reactjs bootstrap et tailwind et fichier Json</p>
        <p> lien du code de la page : <a href='#' target='_blank' className='text-red-400'>ici</a> </p>
        <p>Bonne journée !!</p>
    <div className='absolute border bottom-0 right-0'>
        <button type='button' className='btn'>
            <a href='#'>haut de page</a>
        </button>
    </div>
    </footer>
    </div>
  );
}

export default Home;
