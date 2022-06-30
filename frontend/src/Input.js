export const Input = ({ fieldName, placeholder, register }) => {
  return (
    <input
      className="w-full rounded-md p-1 text-gray-800"
      placeholder={placeholder}
      {...register(fieldName)}
    />
  );
};
