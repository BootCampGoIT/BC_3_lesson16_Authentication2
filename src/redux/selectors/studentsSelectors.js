const getStudents = (state) => state.students.items;

const getStudentsIsLoading = (state) => state.students.isLoading;

const getStudentsError = (state) => state.students.error;

export { getStudents, getStudentsIsLoading, getStudentsError };
