import { useState } from "react";

const allBrands = [
  { id: "1", brandName: "Nike" },
  { id: "2", brandName: "Adidas" },
  { id: "3", brandName: "Puma" },
  { id: "4", brandName: "Fila" },
  { id: "5", brandName: "Reebok" }
];

function BrandFilter() {
  const [brands, setBrands] = useState(allBrands);

  const onSearchChange = (e) => {
    const value = e.target.value.toLowerCase();

    if (value.length === 0) {
      setBrands(allBrands);
      return;
    }

    const filteredBrands = allBrands.filter((brand) =>
      brand.brandName.toLowerCase().includes(value)
    );

    setBrands(filteredBrands);
  };

  return (
    <>
      <h1>Brand Filter</h1>

      <input
        type="text"
        placeholder="Search a brand"
        onChange={onSearchChange}
      />

      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>
    </>
  );
}

export default BrandFilter;