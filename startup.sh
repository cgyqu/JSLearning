


echo "start build"
git clone 


dotnet publish -o /home/cgymy/publish/JsLearning

cd /home/cgymy/publish/JsLearning

echo "start docker build"
docker build -t jstest .

echo "start docker service"
docker run -it -p 3000:3000 jstest





