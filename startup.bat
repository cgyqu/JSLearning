echo "start build"
dotnet publish -o F:\puslish\JsLearning

cd F:\puslish\JsLearning

echo "start docker build"
docker build -t jstest .




