export const formatCep = (value: string): string => {
  const rawValue = value.replace(/\D/g, '').slice(0, 8);  
  return rawValue.replace(/^(\d{5})(\d{0,3})/, '$1-$2');
};