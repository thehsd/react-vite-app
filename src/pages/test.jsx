import { useRef } from "react";
import { useAddProductQuery } from "../queries/product-queries";
import { useForm } from "react-hook-form";

const TestPage = () => {
  // const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      id: "12",
      title: "",
      price: "100",
      description: "",
      category: "",
    },
  });
  const { mutate, isPending } = useAddProductQuery();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(formRef.current);
  //   const formValue = Object.fromEntries(formData.entries());
  //   mutate(formValue, {
  //     onSuccess: () => {
  //       alert("product created successfully");
  //     },
  //   });
  // };
  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        alert("product created successfully");
      },
    });
  });
  return (
    <div className="bg-white p-3">
      <form onSubmit={onSubmit}>
        <input
          {...register("id", { required: "id is required" })}
          className="border border-gray-300 rounded-md p-3 m-3"
          type="text"
          placeholder="enter ID"
        />
        {errors.id && <p className="text-red-500"> id is required</p>}
        <input
          {...register("title")}
          className="border border-gray-300 rounded-md p-3 m-3"
          type="text"
          placeholder="enter title"
        />
        <input
          {...register("price", { required: "price is required" })}
          className="border border-gray-300 rounded-md p-3 m-3"
          type="text"
          placeholder="enter price"
        />

        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        <input
          {...register("description")}
          className="border border-gray-300 rounded-md p-3 m-3"
          type="text"
          placeholder="enter description"
        />
        <input
          {...register("category")}
          className="border border-gray-300 rounded-md p-3 m-3"
          type="text"
          placeholder="enter category"
        />

        <br />
        <button
          disabled={!isValid}
          className="p-2 bg-green-500 rounded-md"
          type="submit"
        >
          {isPending ? "loading..." : "submit"}
        </button>
      </form>
      {/* <form ref={formRef} onSubmit={handleSubmit}>
        <input
          className="border border-gray-300 rounded-md p-3 m-3"
          type="text"
          name="id"
          placeholder="enter ID"
        />
        <input
          className="border border-gray-300 rounded-md p-3 m-3"
          type="text"
          name="title"
          placeholder="enter title"
        />
        <input
          className="border border-gray-300 rounded-md p-3 m-3"
          type="text"
          name="price"
          placeholder="enter price"
        />
        <input
          className="border border-gray-300 rounded-md p-3 m-3"
          type="text"
          name="description"
          placeholder="enter description"
        />
        <input
          className="border border-gray-300 rounded-md p-3 m-3"
          type="text"
          name="category"
          placeholder="enter category"
        />

        <br />
        <button className="p-2 bg-green-500 rounded-md" type="submit">
          {isPending ? "loading..." : "submit"}
        </button>
      </form> */}
    </div>
  );
};

export default TestPage;
