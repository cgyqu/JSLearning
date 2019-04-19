echo "start git clone..."
# 拉取最新代码
ls JSLearning && cd JSLearning && git pull)||git clone git@github.com:cgyqu/JSLearning.git && cd JSLearning
echo "git clone finished!"
# 进入目录
cd JSLearning &&
(
echo "当前目录:"`pwd`
echo "start docker build"
sudo docker build -t JSLearning .
echo "docker build suceess!"
echo "start JSLearning service"
)
docker run -it -p 3000:3000 JSLearning