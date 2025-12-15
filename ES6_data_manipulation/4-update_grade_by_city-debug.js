export default function updateStudentGradeByCity(students, city, newGrades) {
    console.log('==========================================');
    console.log('📥 DONNÉES INITIALES');
    console.log('==========================================');
    console.log('Students:', JSON.stringify(students, null, 2));
    console.log('City:', city);
    console.log('NewGrades:', JSON.stringify(newGrades, null, 2));
    console.log('\n==========================================');
    console.log('🔍 ÉTAPE 1: FILTER (Filtrage par ville)');
    console.log('==========================================');
    
    const filtered = students.filter((student) => {
        const keep = student.location === city;
        console.log(`${student.firstName} (${student.location}): ${keep ? '✅ GARDE' : '❌ ÉLIMINE'}`);
        return keep;
    });
    
    console.log(`\n📊 Résultat après filter: ${filtered.length} étudiant(s)\n`);
    
    console.log('==========================================');
    console.log('✏️ ÉTAPE 2: MAP (Ajout des notes)');
    console.log('==========================================');
    
    const result = filtered.map((student) => {
        console.log(`\n--- Traitement de ${student.firstName} (id: ${student.id}) ---`);
        
        const gradeRecord = newGrades.find((record) => {
            const match = record.studentId === student.id;
            console.log(`  🔎 Cherche studentId ${record.studentId} === ${student.id}? ${match ? '✅' : '❌'}`);
            return match;
        });
        
        if (gradeRecord) {
            console.log(`  ✅ Note trouvée: ${gradeRecord.grade}`);
            const result = { ...student, grade: gradeRecord.grade };
            console.log(`  📝 Résultat:`, result);
            return result;
        } else {
            console.log(`  ⚠️ Aucune note trouvée → grade: 'N/A'`);
            const result = { ...student, grade: 'N/A' };
            console.log(`  📝 Résultat:`, result);
            return result;
        }
    });
    
    console.log('\n==========================================');
    console.log('🎯 RÉSULTAT FINAL');
    console.log('==========================================');
    console.log(JSON.stringify(result, null, 2));
    console.log('==========================================\n');
    
    return result;
}
