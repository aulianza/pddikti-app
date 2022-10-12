const GET_STATS = process.env.NEXT_PUBLIC_API_URL_V2 + 'home_jumlah'
const GET_MAHASISWA = process.env.NEXT_PUBLIC_API_AULIANZA + 'mahasiswa/search?query='
const GET_MAHASISWA_DETAIL = process.env.NEXT_PUBLIC_API_AULIANZA + 'mahasiswa/detail?id='

export async function getStatistics() {
  const response = await fetch(GET_STATS);
  const jsonData = await response.json();
  return jsonData
}

export async function getMahasiswa(value: any) {
  const response = await fetch(GET_MAHASISWA + value);
  const jsonData = await response.json();
  return jsonData
}

export async function getMahasiswaDetail(id: any) {
  const response = await fetch(GET_MAHASISWA_DETAIL + id);
  const jsonData = await response.json();
  return jsonData
}