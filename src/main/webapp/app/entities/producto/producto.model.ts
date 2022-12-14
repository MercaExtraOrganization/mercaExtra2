export interface IProducto {
  id?: number;
  nombre?: string | null;
  precio?: number | null;
  cantidad?: number | null;
  categoria?: string | null;
  imagenContentType?: string | null;
  imagen?: string | null;
  precioDescuento?: number | null;
  descripcion?: string | null;
  cantidadSeleccionada?: number | null;
  precioConDescuento?: number | null;
  cantidadOriginal?: number | null;
  estado?: string | null;
  isFavorite?: boolean | null;
}

export class Producto implements IProducto {
  constructor(
    public id?: number,
    public nombre?: string | null,
    public precio?: number | null,
    public cantidad?: number | null,
    public categoria?: string | null,
    public imagenContentType?: string | null,
    public imagen?: string | null,
    public precioDescuento?: number | null,
    public descripcion?: string | null,
    public cantidadSeleccionada?: number | null,
    public precioConDescuento?: number | null,
    public cantidadOriginal?: number | null,
    public estado?: string | null,
    public isFavorite?: boolean | null
  ) {}
}

export function getProductoIdentifier(producto: IProducto): number | undefined {
  return producto.id;
}
