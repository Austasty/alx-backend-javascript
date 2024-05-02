/* eslint-disable */
export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  const idLists = getListStudents.map((el) => el.id);

  return idLists;
}
