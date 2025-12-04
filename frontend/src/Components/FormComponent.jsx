export default function FormComponent({
  formData,
  handleOnSubmit,
  handleOnChange,
}) {
  return (
    <div>
      <form method="post" onSubmit={(e) => handleOnSubmit(e)}>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={(e) => handleOnChange(e)}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={(e) => handleOnChange(e)}
          placeholder="Password..."
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}