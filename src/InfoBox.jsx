import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  const COLD_URL =
    "https://i.pinimg.com/736x/5f/14/01/5f1401818c17a2ebc5ffdd85fe781ef2.jpg";
  const HOT_URL =
    "https://i.pinimg.com/736x/2b/25/32/2b2532f584ae2bbfd9d2ca04cb93869b.jpg";
  const RAIN_URL =
    "https://i.pinimg.com/736x/05/ff/aa/05ffaa6c43d509be12eeeb31f8023522.jpg";

  return (
    <div className="InfoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp < 15
                ? COLD_URL
                : HOT_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component={"div"}>
              {info.city} &nbsp;
              {info.humidity > 80 ? (
                <ThunderstormIcon fontSize="small"/>
              ) : info.temp < 15 ? (
                <AcUnitIcon fontSize="small"/>
              ) : (
                <WbSunnyIcon fontSize="small"/>
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              componet={"span"}>
              <p>Temp : {info.temp}&deg;C</p>
              <p>Humidity : {info.humidity}&deg;C</p>
              <p>Min Temp : {info.minTemp}&deg;C</p>
              <p>Max Temp : {info.maxTemp}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
