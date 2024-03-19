import PropTypes from "prop-types";

export const TablePaises = ({ paises, nombre }) => {
  return (
    <>
      <div className="position-relative">
        <h1 className="position-absolute top-50 start-50 translate-middle  mt-5">
          {nombre}
        </h1>
      </div>
      <div className="position-relative center-div  mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>capital</th>
              <th>reguion</th>
              <th>subreguion</th>
            </tr>
          </thead>
          <tbody>
            {paises.map((list, index) => (
              <tr key={index}>
                <td>{list.capital}</td>
                <td>{list.region}</td>
                <td>{list.subregion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

TablePaises.propTypes = {
  paises: PropTypes.any,
  nombre: PropTypes.string,
};
