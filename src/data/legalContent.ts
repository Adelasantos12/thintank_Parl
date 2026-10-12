export interface LegalSection {
  title: string;
  subsections: {
    heading: string;
    content: string | string[];
  }[];
}

export interface LegalDocument {
  statutes: {
    title: string;
    sections: LegalSection['subsections'];
  };
  privacy: {
    title: string;
    effectiveDate: string;
    sections: LegalSection['subsections'];
  };
  terms: {
    title: string;
    effectiveDate: string;
    sections: LegalSection['subsections'];
  };
}

export const legalTranslations: Record<string, LegalDocument> = {
  es: {
    statutes: {
      title: "Estatutos y marco jurídico",
      sections: [
        {
          heading: "Naturaleza jurídica",
          content: "El Genève Center for Parliamentary Governance, también denominado Centre de Genève pour la Gouvernance Parlementaire y GCPG, es una asociación independiente, no partidista y sin fines de lucro, constituida conforme a los artículos 60 y siguientes del Código Civil suizo.\n\nLa asociación tiene su sede en el cantón de Ginebra, Suiza."
        },
        {
          heading: "Finalidad",
          content: "GCPG promueve el estudio comparado de los parlamentos, los procedimientos legislativos y la calidad de la elaboración normativa.\n\nPara cumplir esta finalidad, puede realizar investigación, formación, actividades de intercambio profesional, publicaciones, cooperación institucional y proyectos vinculados con la gobernanza parlamentaria."
        },
        {
          heading: "Independencia",
          content: "GCPG actúa con independencia de gobiernos, partidos políticos e intereses comerciales.\n\nLa colaboración con instituciones públicas, universidades, organizaciones internacionales, fundaciones u otras entidades no implica que estas adopten o respalden las conclusiones, publicaciones o posiciones de GCPG, salvo declaración expresa.\n\nLas opiniones atribuidas a una autora o autor son responsabilidad de quien las formule y no representan necesariamente la posición de GCPG, de sus miembros, de sus órganos de gobierno, de sus asociados o de sus entidades colaboradoras."
        },
        {
          heading: "Estatutos y gobernanza",
          content: "Los Estatutos de la asociación regulan su organización, sus órganos, sus competencias, su representación y los derechos y obligaciones de sus miembros.\n\nLas decisiones adoptadas por los órganos competentes de la asociación se rigen por los Estatutos y por el derecho suizo aplicable.\n\nLa información disponible en este sitio tiene carácter informativo y no modifica los Estatutos ni sustituye sus disposiciones."
        },
        {
          heading: "Derecho aplicable y contacto",
          content: "La actividad de GCPG se rige por el derecho suizo y, en particular, por las normas aplicables a las asociaciones de derecho privado, la legislación sobre protección de datos, propiedad intelectual y obligaciones contractuales.\n\nPara asuntos relativos a la asociación:\n\nGenève Center for Parliamentary Governance\nEaux-Vives\n1207 Geneva\nSwitzerland\ncontact@parliamentarygovernance.org"
        }
      ]
    },
    privacy: {
      title: "Política de privacidad",
      effectiveDate: "2026",
      sections: [
        {
          heading: "Responsable del tratamiento",
          content: "El responsable del tratamiento de los datos personales es:\n\nGenève Center for Parliamentary Governance\nEaux-Vives, 1207 Ginebra, Suiza\nCorreo electrónico para asuntos de privacidad: contact@parliamentarygovernance.org"
        },
        {
          heading: "Datos tratados",
          content: "GCPG puede tratar los datos que una persona facilite al utilizar el sitio, incluidos su nombre, dirección de correo electrónico y el contenido de un mensaje enviado mediante un formulario de contacto.\n\nEl sitio también puede tratar datos técnicos necesarios para su funcionamiento y seguridad, como dirección IP, fecha y hora de acceso, información del navegador y registros técnicos."
        },
        {
          heading: "Finalidades",
          content: "Los datos personales se tratan para administrar el sitio, atender comunicaciones recibidas, proteger su seguridad, prevenir usos indebidos y cumplir obligaciones legales.\n\nGCPG no vende datos personales ni los utiliza para publicidad conductual."
        },
        {
          heading: "Destinatarios y proveedores",
          content: "GCPG puede recurrir a proveedores que prestan servicios de alojamiento, infraestructura, almacenamiento de datos, seguridad o mantenimiento técnico.\n\nLos proveedores que intervienen actualmente en la operación del sitio incluyen:\n- Vercel, para alojamiento e infraestructura web\n- Railway / PostgreSQL, para alojamiento de la base de datos\n\nLos datos solo se comunican a terceros cuando ello sea necesario para prestar el servicio, cumplir una obligación legal o proteger los derechos de GCPG."
        },
        {
          heading: "Tratamiento internacional",
          content: "Los proveedores técnicos pueden tratar datos fuera de Suiza en cumplimiento de la legislación suiza sobre protección de datos y las salvaguardas aplicables."
        },
        {
          heading: "Conservación",
          content: "Los datos se conservan durante el tiempo necesario para la finalidad para la que fueron recopilados, para atender obligaciones legales o para resolver incidencias.\n\nLos registros técnicos se conservan durante el periodo necesario para la seguridad, el mantenimiento y la prevención de abusos."
        },
        {
          heading: "Cookies",
          content: "El sitio puede utilizar cookies o tecnologías similares necesarias para su funcionamiento, seguridad y preferencias de idioma.\n\nSi se incorporan herramientas analíticas, contenido incrustado u otras tecnologías no esenciales, esta política se actualizará para identificar el proveedor, la finalidad y las opciones disponibles para las personas usuarias."
        },
        {
          heading: "Seguridad",
          content: "GCPG adopta medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida, alteración o divulgación indebida."
        },
        {
          heading: "Derechos y contacto",
          content: "Toda persona puede solicitar información sobre los datos personales que GCPG trata sobre ella. También puede solicitar la rectificación de datos inexactos, la supresión de datos cuando proceda o la limitación de su tratamiento.\n\nCorreo electrónico para asuntos de privacidad: contact@parliamentarygovernance.org"
        },
        {
          heading: "Cambios",
          content: "GCPG podrá actualizar esta política cuando cambien sus prácticas de tratamiento de datos o la normativa aplicable. La versión vigente estará disponible en este sitio."
        }
      ]
    },
    terms: {
      title: "Términos de uso",
      effectiveDate: "2026",
      sections: [
        {
          heading: "Alcance",
          content: "Estos términos regulan el acceso y el uso del sitio web de Genève Center for Parliamentary Governance.\n\nAl utilizar el sitio, la persona usuaria acepta estos términos."
        },
        {
          heading: "Uso del sitio",
          content: "El sitio puede utilizarse para fines personales, académicos, profesionales e institucionales compatibles con su objeto.\n\nNo está permitido emplearlo de forma que afecte a su seguridad, disponibilidad o integridad. Tampoco está permitido intentar acceder a zonas restringidas, recopilar datos de forma automatizada sin autorización o utilizar el sitio para actividades ilícitas."
        },
        {
          heading: "Contenido",
          content: "Las publicaciones, materiales, datos y demás contenidos se ofrecen con fines de información, investigación y difusión institucional.\n\nSalvo indicación expresa, el contenido no constituye asesoramiento jurídico, político, financiero ni profesional. Quien utilice información disponible en el sitio debe valorar su pertinencia para el caso concreto.\n\nGCPG procura mantener la información actualizada, pero no garantiza que todo el contenido permanezca completo, exacto o disponible en todo momento."
        },
        {
          heading: "Propiedad intelectual",
          content: "Los contenidos del sitio están protegidos por las normas aplicables de propiedad intelectual.\n\nSe permite citar y compartir materiales de GCPG con reconocimiento claro de la fuente, siempre que se respete la normativa aplicable y no se altere el sentido de la obra.\n\nLa reproducción sustancial, adaptación, distribución comercial o utilización de marcas, logotipos e identidad visual de GCPG requiere autorización previa por escrito, salvo que exista una licencia específica que disponga otra cosa."
        },
        {
          heading: "Enlaces externos",
          content: "El sitio puede contener enlaces a recursos de terceros, incluidos organismos públicos, universidades, publicaciones y plataformas de redes sociales.\n\nGCPG no controla el contenido, la disponibilidad ni las prácticas de privacidad de esos recursos externos."
        },
        {
          heading: "Responsabilidad",
          content: "En la medida permitida por la ley aplicable, GCPG no responde por daños derivados del uso o de la imposibilidad de uso del sitio, de contenidos de terceros o de decisiones adoptadas exclusivamente con base en la información publicada.\n\nNada de lo previsto en estos términos limita una responsabilidad que no pueda excluirse conforme al derecho aplicable."
        },
        {
          heading: "Modificaciones",
          content: "GCPG podrá modificar estos términos cuando resulte necesario. La versión vigente será la publicada en este sitio."
        },
        {
          heading: "Derecho aplicable y jurisdicción",
          content: "Estos términos se rigen por el derecho suizo.\n\nSin perjuicio de las normas imperativas aplicables, los tribunales competentes del cantón de Ginebra tendrán jurisdicción sobre las controversias relacionadas con el uso del sitio."
        }
      ]
    }
  },
  en: {
    statutes: {
      title: "Statutes and Legal Framework",
      sections: [
        {
          heading: "Legal Nature",
          content: "The Genève Center for Parliamentary Governance, also referred to as Centre de Genève pour la Gouvernance Parlementaire and GCPG, is an independent, non-partisan, non-profit association established under Articles 60 et seq. of the Swiss Civil Code.\n\nThe association is headquartered in the Canton of Geneva, Switzerland."
        },
        {
          heading: "Purpose",
          content: "GCPG promotes the comparative study of parliaments, legislative procedures, and the quality of lawmaking.\n\nTo fulfill this purpose, it may conduct research, executive training, professional exchanges, publications, institutional cooperation, and parliamentary governance projects."
        },
        {
          heading: "Independence",
          content: "GCPG acts independently of governments, political parties, and commercial interests.\n\nCollaboration with public institutions, universities, international organizations, foundations, or other entities does not imply endorsement by those entities of GCPG's conclusions or positions, unless explicitly stated.\n\nOpinions expressed in publications are solely those of the authors and do not necessarily represent the official position of GCPG or its partner organizations."
        },
        {
          heading: "Statutes and Governance",
          content: "The Statutes of the association govern its organization, bodies, competencies, representation, and membership rights and obligations.\n\nDecisions adopted by competent bodies of the association are governed by the Statutes and applicable Swiss law."
        },
        {
          heading: "Applicable Law and Contact",
          content: "GCPG's activities are governed by Swiss law, particularly rules applicable to private law associations, data protection, intellectual property, and contractual obligations.\n\nFor matters regarding the association:\n\nGenève Center for Parliamentary Governance\nEaux-Vives\n1207 Geneva\nSwitzerland\ncontact@parliamentarygovernance.org"
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      effectiveDate: "2026",
      sections: [
        {
          heading: "Data Controller",
          content: "The data controller responsible for personal data processing is:\n\nGenève Center for Parliamentary Governance\nEaux-Vives, 1207 Geneva, Switzerland\nPrivacy contact: contact@parliamentarygovernance.org"
        },
        {
          heading: "Data Processed",
          content: "GCPG may process personal data provided by users, including name, email address, and messages sent via contact forms.\n\nThe website also processes technical data necessary for security and operation, such as IP addresses, access timestamp, browser information, and technical logs."
        },
        {
          heading: "Purposes of Processing",
          content: "Personal data is processed to administer the site, handle user inquiries, ensure technical security, prevent abuse, and comply with legal obligations.\n\nGCPG does not sell personal data or use it for behavioral advertising."
        },
        {
          heading: "Service Providers & Recipients",
          content: "GCPG uses infrastructure and hosting providers including Vercel for web hosting and Railway / PostgreSQL for database hosting.\n\nData is shared with third parties only when necessary to perform services, fulfill legal obligations, or protect GCPG's rights."
        },
        {
          heading: "International Processing",
          content: "Technical service providers may process data outside Switzerland in compliance with Swiss data protection laws and appropriate safeguards."
        },
        {
          heading: "Data Retention",
          content: "Personal data is retained only for as long as necessary to achieve the collection purpose, satisfy legal requirements, or resolve disputes."
        },
        {
          heading: "Cookies",
          content: "Essential cookies required for site operation, security, and language preferences may be utilized."
        },
        {
          heading: "Security",
          content: "GCPG implements appropriate technical and organizational measures to safeguard personal data against unauthorized access, loss, or disclosure."
        },
        {
          heading: "User Rights & Contact",
          content: "Users may request access, rectification, erasure, or restriction of their personal data by contacting contact@parliamentarygovernance.org."
        },
        {
          heading: "Changes",
          content: "GCPG may update this policy as practices or regulations evolve. The active version is always available on this website."
        }
      ]
    },
    terms: {
      title: "Terms of Use",
      effectiveDate: "2026",
      sections: [
        {
          heading: "Scope",
          content: "These terms govern access to and use of the Genève Center for Parliamentary Governance website. By accessing the site, users accept these terms."
        },
        {
          heading: "Use of the Website",
          content: "The website may be used for personal, academic, professional, and institutional purposes compatible with its purpose. Unauthorized automated data scraping or activities compromising security are strictly prohibited."
        },
        {
          heading: "Content & Information",
          content: "Materials published on the site are provided for informational and research purposes. Unless explicitly stated, content does not constitute legal or professional advice."
        },
        {
          heading: "Intellectual Property",
          content: "Content is protected under applicable intellectual property laws. Citation and sharing are permitted with clear attribution to GCPG. Substantial reproduction or commercial use requires prior written authorization."
        },
        {
          heading: "External Links",
          content: "The site may contain links to third-party resources. GCPG does not control or assume responsibility for external content or privacy practices."
        },
        {
          heading: "Limitation of Liability",
          content: "To the maximum extent permitted under Swiss law, GCPG is not liable for damages arising from website use or reliance on published content."
        },
        {
          heading: "Governing Law & Jurisdiction",
          content: "These terms are governed by Swiss law. Competent courts in the Canton of Geneva, Switzerland have jurisdiction over any disputes."
        }
      ]
    }
  },
  fr: {
    statutes: {
      title: "Statuts et cadre juridique",
      sections: [
        {
          heading: "Nature juridique",
          content: "Le Genève Center for Parliamentary Governance, également nommé Centre de Genève pour la Gouvernance Parlementaire et GCPG, est une association indépendante, non partisane et à but non lucratif constituée conformément aux articles 60 et suivants du Code civil suisse.\n\nL'association a son siège dans le canton de Genève, Suisse."
        },
        {
          heading: "But",
          content: "Le GCPG promeut l'étude comparée des parlements, des procédures législatives et de la qualité du travail normatif.\n\nPour atteindre ce but, il peut mener des recherches, de la formation, des échanges professionnels, des publications et des projets de coopération institutionnelle."
        },
        {
          heading: "Indépendance",
          content: "Le GCPG agit en toute indépendance des gouvernements, des partis politiques et des intérêts commerciaux.\n\nLes opinions exprimées n'engagent que leurs auteurs et ne reflètent pas nécessairement la position officielle du GCPG."
        },
        {
          heading: "Statuts et gouvernance",
          content: "Les Statuts de l'association régissent son organisation, ses organes, ses compétences ainsi que les droits et obligations de ses membres."
        },
        {
          heading: "Droit applicable et contact",
          content: "L'activité du GCPG est régie par le droit suisse.\n\nContact:\nGenève Center for Parliamentary Governance\nEaux-Vives, 1207 Genève, Suisse\ncontact@parliamentarygovernance.org"
        }
      ]
    },
    privacy: {
      title: "Politique de confidentialité",
      effectiveDate: "2026",
      sections: [
        {
          heading: "Responsable du traitement",
          content: "Genève Center for Parliamentary Governance\nEaux-Vives, 1207 Genève, Suisse\nContact: contact@parliamentarygovernance.org"
        },
        {
          heading: "Données traitées",
          content: "Le GCPG traite les données transmises via les formulaires de contact ainsi que les données techniques nécessaires au fonctionnement et à la sécurité du site."
        },
        {
          heading: "Finalités et destinataires",
          content: "Les données sont traitées pour la gestion du site et les communications. Elles ne sont ni vendues ni cédées à des fins commerciales."
        },
        {
          heading: "Vos droits",
          content: "Conformément à la loi suisse sur la protection des données, vous disposez d'un droit d'accès, de rectification et de suppression. Contact: contact@parliamentarygovernance.org"
        }
      ]
    },
    terms: {
      title: "Conditions d'utilisation",
      effectiveDate: "2026",
      sections: [
        {
          heading: "Champ d'application",
          content: "Les présentes conditions régissent l'utilisation du site web du GCPG. L'utilisation du site implique l'acceptation de ces conditions."
        },
        {
          heading: "Propriété intellectuelle",
          content: "Les contenus du site sont protégés par le droit d'auteur. La citation est autorisée sous réserve d'indiquer clairement la source GCPG."
        },
        {
          heading: "Droit applicable et for",
          content: "Les présentes conditions sont soumises au droit suisse. Le for juridique est à Genève, Suisse."
        }
      ]
    }
  }
};
