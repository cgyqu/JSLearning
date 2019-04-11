FROM microsoft/dotnet:latest
WORKDIR /app
ENV ASPNETCORE_URLS http://0.0.0.0:3000/
EXPOSE 3000
COPY . .
ENTRYPOINT ["dotnet", "JsLearning.dll"]
