const getTutors = (state) => state.tutors.items;
const getTutorsIsLoading = (state) => state.tutors.isLoading;
const getTutorsError = (state) => state.tutors.error;

export { getTutors, getTutorsIsLoading, getTutorsError };
