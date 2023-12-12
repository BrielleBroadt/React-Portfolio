import React from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';


const ResumeDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Brielle Broadt</Text>
          <Text style={styles.subHeader}>Contact Information:</Text>
          <Text>Address: 164 Eaves Mill Road, Medford, NJ, 08055</Text>
          <Text>Email: brielleb.broadt.com</Text>
          <Text style="styles.section">Phone: 609-257-8287</Text>
          <Text style={styles.section}>Looking to transition my career with the goal of merging my operational acumen with my growing expertise in full stack development, aiming to craft user-centric, efficient, and innovative web solutions. Eager to contribute my adaptability, problem-solving skills, and a strong operational background to a collaborative team of developers to create engaging and impactful web applications.</Text>
          <Text style={styles.header}> PROFESSIONAL EXPERIENCE </Text>
          <Text style={styles.subHeader}>Epiphany Wellness</Text>
          <Text style={styles.subHeader}>Operations Manager Feb 2022-Current</Text>
          <Text>•	Led the implementation and conducted audits of technology systems “Behave” and “Hatch,” ensuring smooth integration and compliance with organizational standards.
•	Developed and executed comprehensive training plans for both entry-level employees and supervisors, facilitating seamless onboarding process and over all enhancing overall team performance.
•	Oversaw the Medical, Behavioral Health Technician, Facilities and Office Manager departments, ensuring smooth operations and cross-departmental coordination.
•	Conducted monthly supervisions and staff meetings for Behavioral Health Technician positions fostering an environment of continuous improvement and professional development. 
•	Managed rent and co-pay collection processes, handling amounts exceeding $55,00 annually, while maintaining accuracy and compliance.
•	Established and enforced standardized operating procedures, enhancing overall efficiency and ensuring compliance with industry standards.
</Text>
        
        </View>
      </Page>
    </Document>
  );
};
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Times-Roman',
    fontSize: 12,
    padding: 40,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 5,
  },
});
const Resume = () => {
  const generatePDF = () => {
    const blob = new Blob([<ResumeDocument />], { type: 'application/pdf' });
    saveAs(blob, 'Your_Resume.pdf');
  };
  return (
<div>
      <h2>Your Resume</h2>
      <PDFViewer width="100%" height={500}>
        <ResumeDocument />
      </PDFViewer>
      <PDFDownloadLink document={<ResumeDocument />} fileName="Your_Resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  )
}

export default Resume