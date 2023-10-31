import { useEffect, useState } from "react";
import { api } from "./api/axios";
import { ApiUser } from "./models/User";
import { Footer } from "./components/Footer";

export const App = () => {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleReadData = async () => {
    setLoading(true);

    try {
      const { data } = await api.get("/users");
      setUsers(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleReadData();
  }, []);

  return (
    <article>
      <h1>CRUD AXIOS TYPESCRIPT</h1>
      <section>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </section>
      <section>{loading && <p>Cargando...</p>}</section>
      <section>{error && <h2>Hubo un error...</h2>}</section>
      <Footer message="Derechos Reservados" year={2023} />
    </article>
  );
};
